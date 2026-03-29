import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { DesignProjectCard } from '@/components/DesignProjectCard';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Design',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Design(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations('Design');

  return (
    <>
      <div className="z-0 mx-auto max-w-screen-xl px-6 pb-10">
        <div className="py-12">
          <h1>{t('page_title')}</h1>
        </div>
        <div className="relative">
          <div className="mx-2 grid grid-cols-1 gap-10 md:mx-14 md:grid-cols-2">
            <DesignProjectCard
              card_image_src="/assets/images/ROSABrain2.png"
              image_alt="ROSA Brain"
              title="ROSA ONE Brain"
              subtitle="Robotic Neurosurgical Device"
              page_link="/design/rosa-brain/"
              bg_color="rgb(249 168 212)"
              alignment="start"
            />
            <DesignProjectCard
              card_image_src="/assets/images/NaviScout.png"
              image_alt="NaviScout"
              title="NaviScout"
              subtitle="A Spine Navigation System for Out-patient Clinics"
              page_link="/design/naviscout/"
              bg_color="rgb(186 230 253)"
              alignment="start"
            />
            <DesignProjectCard
              card_image_src="/assets/images/PatentImage.png"
              image_alt="Hockey"
              title="Patent for Tibial Axis Registration"
              subtitle="A way to perform total knee arthroplasties without pins"
              page_link="/design/pinless-tibia-mechanical-axis/"
              bg_color="rgb(254 215 170)"
              alignment="start"
            />
            <DesignProjectCard
              card_image_src="/assets/images/ElainesEasecipes.png"
              image_alt="RecipesWebsite"
              title="Personal Food Website"
              subtitle="A journal of my family's favourite recipes"
              page_link="/design/food-website/"
              bg_color="rgb(197, 243, 219)"
              alignment="end"
            />
          </div>
        </div>
      </div>
    </>
  );
}
