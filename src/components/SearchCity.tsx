import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

interface SearchCityProps {
    onSearch: (city: string) => void;
    isLoading?: boolean;
}

export const SearchCity: React.FC<SearchCityProps> = ({ onSearch, isLoading }) => {
    const [query, setQuery] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) {
            setError('Por favor, ingresa el nombre de una ciudad');
            return;
        }
        setError(null);
        onSearch(query.trim());
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        if (error) setError(null);
    };

    return (
        <div className="w-full max-w-2xl mx-auto mb-10 px-4">
            <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-3 items-start">
                <div className="w-full">
                    <Input
                        value={query}
                        onChange={handleChange}
                        placeholder="Introduce el nombre de una ciudad..."
                        error={error}
                        disabled={isLoading}
                        autoComplete="off"
                    />
                </div>
                <Button
                    type="submit"
                    isLoading={isLoading}
                    leftIcon={!isLoading && <Search className="w-5 h-5" />}
                    className="whitespace-nowrap w-full sm:w-auto sm:min-w-[140px]"
                >
                    {isLoading ? 'Buscando' : 'Buscar'}
                </Button>
            </form>
        </div>
    );
};
