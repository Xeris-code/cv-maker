type MainLayout = {
    header: React.ReactNode;
    selector: React.ReactNode;
    sidebar: React.ReactNode;
    children: React.ReactNode;
};

export function MainLayout({ header, selector, sidebar, children }: MainLayout){

    return (
        <main className="app-shell">
            {header}
            {selector}
            <div className="app-layout">
                {sidebar}
                {children}
            </div>
        </main>
    );
}