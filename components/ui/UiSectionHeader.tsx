type UiSectionHeader = {
    title: string;
    description: string;
    counter?: number;
    itemLabel?: string;
};

export function UiSectionHeader ({title, description, counter, itemLabel}: UiSectionHeader) {
    
    const styles = {
        wrapper: "flex flex-col px-8 py-4 gap-0.5 border-b-1 border-gray-200 shadow-md",
        title: "text-[20px] font-semibold",
        descriptionWrapper: "flex justify-between items-center text-gray-500",
        description: "text-[12px]",
        counter: "text-[12px]",
    };

    const hasItems = counter || itemLabel;
    
    return (
        <div className={styles.wrapper}>
            <div>
                <span className={styles.title}>{title}</span>
            </div>
            <div className={styles.descriptionWrapper}>
                <span className={styles.description}>{description}</span>
                {hasItems && <span className={styles.counter}>{counter} {itemLabel}</span>}
            </div>
    </div>
    );
};