import { signal } from "@preact/signals-react";

export const errorMessage = signal<string>('');

export const resetError = () => {
    errorMessage.value = '';
}
