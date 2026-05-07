import { MenuCategory, MenuTranslations } from "@/lib/types";

type MobileMenuSwitcherProps = {
  activeMenu: MenuCategory;
  onMenuChange: (menu: MenuCategory) => void;
  translations: MenuTranslations;
};

export function MobileMenuSwitcher({
  activeMenu,
  onMenuChange,
  translations,
}: MobileMenuSwitcherProps) {
  const items: MenuCategory[] = [
    "personal",
    "work",
    "education",
    "skills",
    "languages",
    "projects",
    "courses",
    "interests",
  ];

  return (
    <div className="flex gap-2 overflow-x-auto px-3 py-2 border-b bg-white">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onMenuChange(item)}
          className={`whitespace-nowrap px-3 py-1.5 text-sm rounded-full ${
            activeMenu === item
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          {translations[item].title}
        </button>
      ))}
    </div>
  );
}