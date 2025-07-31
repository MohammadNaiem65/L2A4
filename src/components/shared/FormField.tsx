import type { ReactNode } from 'react';
import React from 'react';
import { Label } from '../ui/label';

interface FormFieldProps {
    children: ReactNode;
    className?: string;
    label?: string;
    htmlFor?: string;
    error?: {
        message: string | undefined;
    };
}

export default function FormField(props: FormFieldProps) {
    const { children, className, label, htmlFor, error } = props;

    const id = htmlFor || getChildrenId(children);

    return (
        <div className={className}>
            {label && (
                <Label htmlFor={id} className='mb-2 text-lg'>
                    {label}
                </Label>
            )}

            {children}

            {error && (
                <p className='text-destructive text-sm mt-2'>{error.message}</p>
            )}
        </div>
    );
}

function getChildrenId(children: ReactNode): string | undefined {
    try {
        const child = React.Children.only(children);

        // Type guard: Check if 'child' is a ReactElement with props that might have an id
        if (React.isValidElement(child)) {
            // Cast the props to a type that might have an id property
            const props = child.props as { id?: string };

            // Check if 'id' exists and is a string
            if (props.id && typeof props.id === 'string') {
                return props.id;
            }
        }
    } catch {
        // React.Children.only throws if there are multiple children or no children
        // In this case, we just return undefined
    }

    return undefined; // Return undefined if no id is found or child is not a valid ReactElement
}
