type DeleteButtonProps = {
    onClick: () => void;
};

export function DeleteButton({
    onClick
}:DeleteButtonProps){
    
    const styleButton = "self-center hover:text-red-300 hover:border-red-300 border-1 border-[#E2E8F0] w-6 h-6 text-[#475569]"
    
    return (
        <button className={styleButton} onClick={onClick}>x</button>
    );
};