interface ButtonProps {
    onClick?: () => void;
    label: string;
    type: "button" | "submit";
}

function Button({ onClick, label, type }: ButtonProps) {
    return (
        <button 
            type={type}
            onClick={onClick}
            className="w-10% flex justify-items-center py-2 px-4 border border-transparent cursor-pointer
                    rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
            {label}
        </button>
    );
};

export default Button;
