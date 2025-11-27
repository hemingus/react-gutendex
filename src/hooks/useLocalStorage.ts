import { useState, useEffect } from "react";

interface useLocalStorageProps<T> {
    key: string
    defaultValue: T;
}

export function useLocalStorage<T>({ key, defaultValue }:useLocalStorageProps<T>) {
    const [storage, setStorage] = useState<T>(() => {
        try {
            const data = localStorage.getItem(key);
            return data ? (JSON.parse(data) as T) : defaultValue;
        } catch (error) {
            console.log("failed to get data from localStorage", error);
            return defaultValue;
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storage))
        } catch (error) {
            console.log("failed to set data to localStorage", error);
        }
    }, [key, storage])

    return [storage, setStorage] as const;
}