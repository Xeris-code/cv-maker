type DeleteButtonProps = {
    onClick: () => void;
};

export function DeleteButton({
    onClick
}:DeleteButtonProps){
    
    const styleButton = "transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] hover:text-red-300 flex items-center justify-center pb-0.5 hover:border-red-300 border-1 border-[#E2E8F0] w-6 h-6 text-[#475569] cursor-pointer"
    
    return (
        <button className={styleButton} onClick={onClick}>x</button>
    );
};