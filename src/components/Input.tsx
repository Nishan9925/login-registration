interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    required: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

function Input({ type, name, placeholder, required, onChange, value }: InputProps) {
    return (
        <>
            <input className="mt-1 block w-full px-3 py-2 border border-gray-300
                    rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    value={value}
                    onChange={onChange}
            />
        </>
    );
};

export default Input;
