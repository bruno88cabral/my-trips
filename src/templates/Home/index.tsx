import LinkWrapper from 'components/LinkWrapper'
import { Info } from '@styled-icons/evaicons-solid/Info'
import dynamic from 'next/dynamic'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <LinkWrapper href="/about">
        <Info size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
