import Link from 'next/link';
import { useTranslations } from 'next-intl';

const MobileMenuDropdown = (props: {
  trigger: boolean;
  setTrigger: (open: boolean) => void;
}) => {
  const t = useTranslations('RootLayout');

  if (props.trigger === true) {
    return (
      <div className="absolute right-4 top-16 text-right">
        <ul className="flex flex-col gap-4 rounded-lg border bg-white px-6 py-4 shadow-lg">
          <li className="font-semibold hover:text-teal-700"><Link href="/design/">{t('design_link')}</Link></li>
          <li className="font-semibold hover:text-teal-700"><Link href="/development/">{t('development_link')}</Link></li>
          <li className="font-semibold hover:text-teal-700"><Link href="/resume/">{t('resume_link')}</Link></li>
          <li className="font-semibold hover:text-teal-700"><Link href="/contact/">{t('contact_link')}</Link></li>
        </ul>
      </div>
    );
  } else {
    return ('');
  }
};

export { MobileMenuDropdown };
