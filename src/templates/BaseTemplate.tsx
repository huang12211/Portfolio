import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="h-auto w-full text-gray-700 antialiased">
      <div className="mx-auto">
        <header className="fixed z-50 mb-0.5 w-full border-b border-gray-100 bg-white shadow">
          <div className="mx-auto flex max-w-screen-xl flex-row justify-between gap-x-5 px-6 pt-2 md:px-16">
            <nav>
              <ul className="max-w-screen flex h-12 w-auto items-center gap-x-8 text-sm font-bold text-gray-500 md:h-14 md:gap-x-14 md:text-lg">
                {props.leftNav}
              </ul>
            </nav>

            <nav>
              <ul className="flex h-14 w-auto items-center gap-x-2 text-sm md:h-14 md:text-lg">
                {props.rightNav}
              </ul>
            </nav>
          </div>
        </header>

        <main className="pt-12 md:pt-14">
          {props.children}
        </main>

        <footer className="border-t border-gray-300 bg-slate-800 py-8 text-center text-xs text-white md:text-sm">
          {`© Copyright ${new Date().getFullYear()} ${AppConfig.name}. ${t('made_with')}`}
          .

        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
