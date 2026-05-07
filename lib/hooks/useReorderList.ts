import { useState, useRef, useEffect } from "react";

type ReorderItem = {
    id: number;
};

export function useReorderList<T extends ReorderItem>(
    items: T[],
    onReorder: (items: T[]) => void,
){
    const [draggingId, setDraggingId] = useState<number | null>(null);
    const itemRefs = useRef<Record<number, HTMLDivElement | null>>({});

    function handleDragStart (id: number) {
        setDraggingId(id);
    };

    useEffect (() => {
    
        if (draggingId ===null) return;

        function handleMove(e: MouseEvent) {
            if (draggingId === null) return;

            const overItem = items.find((item) => {
                const el = itemRefs.current[item.id];
                if (!el) return false;

                const react = el.getBoundingClientRect();

                return e.clientY >= react.top && e.clientY <= react.bottom;
            });

            if (!overItem || overItem.id === draggingId) return;
            
            const fromIndex = items.findIndex((item) => item.id ===draggingId);
            const toIndex = items.findIndex((item) => item.id === overItem.id);

            if (fromIndex === -1 || toIndex === -1) return;

            const reordered = [...items];
            const [movedItem] = reordered.splice(fromIndex, 1);

            reordered.splice(toIndex, 0, movedItem);

            onReorder(reordered);
        };

        function handleUp(e: MouseEvent) {
            setDraggingId(null)
        };
        console.log(draggingId)
        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseup", handleUp);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseup", handleUp);
        };

    }, [draggingId, items, onReorder]);

    return {
        draggingId,
        itemRefs,
        handleDragStart,
    };

};