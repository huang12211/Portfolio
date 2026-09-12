'use client';
import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';

const darkenChannels = (color: string, amount: number) => {
  const channels = color.match(/\d+(\.\d+)?/g);
  if (!channels || channels.length < 3) {
    return '0, 0, 0';
  }
  return channels
    .slice(0, 3)
    .map(c => Math.max(0, Math.round(Number(c) * (1 - amount))))
    .join(', ');
};

type CardStyle = CSSProperties & {
  '--card-shadow'?: string;
  '--card-shadow-hover'?: string;
};

const DesignProjectCard = (props: {
  card_image_src: string;
  image_alt: string;
  title: string;
  subtitle: string;
  page_link: string;
  bg_color: string;
  alignment: string;
}) => {
  return (
    <>
      <Link
        href={props.page_link}
      >
        <div
          className="h-[28rem] w-full max-w-screen-xl rounded-xl border-2 shadow-[4px_4px_4px_var(--card-shadow)] duration-150 hover:scale-105 hover:shadow-[8px_8px_8px_var(--card-shadow-hover)] md:h-full"
          style={{
            'backgroundColor': props.bg_color,
            'borderColor': `rgb(${darkenChannels(props.bg_color, 0.15)})`,
            '--card-shadow': `rgba(${darkenChannels(props.bg_color, 0.15)}, 0.55)`,
            '--card-shadow-hover': `rgba(${darkenChannels(props.bg_color, 0.15)}, 0.85)`,
            'justifySelf': props.alignment,
          } as CardStyle}
        >
          <div className="size-full overflow-hidden rounded-xl">
            <div className="m-6 flex flex-col md:mx-12 md:ml-6 md:mr-0">
              <div className="flex w-full flex-col content-center gap-2 px-2">
                <p className="font-serif text-3xl font-bold">
                  {props.title}
                </p>
                <p className="text-xl italic">
                  {props.subtitle}
                </p>
              </div>
              <div className="my-4 h-96 w-auto py-2 md:pl-2">
                <Image
                  src={props.card_image_src}
                  alt={props.image_alt}
                  width="2300"
                  height="1655"
                  className="mx-auto h-96 w-auto rounded-t-xl object-cover md:ml-[5%] md:h-[36rem] md:rounded-tl-xl md:object-left-top"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export { DesignProjectCard };
