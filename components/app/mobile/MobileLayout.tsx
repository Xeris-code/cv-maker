type MobileLayoutProps = {
    header: React.ReactNode;
    selector: React.ReactNode;
    children: React.ReactNode;
};

export function MobileLayout({ header, selector, children }: MobileLayoutProps){

    return (
        <main className="h-screen overflow-y-auto bg-slate-50">
            {header}
            {selector}

            <div className="flex-1 overflow-hidden">
                {children}
            </div>
    </main>
    );
}