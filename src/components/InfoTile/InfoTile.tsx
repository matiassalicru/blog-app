import { SCInfoTileContainer, SCInfoTileTitle, SCInfoTilePhoto, SCInfoTileDescription } from './styles'

export const InfoTile = () => {
  return (
    <SCInfoTileContainer>
      <SCInfoTileTitle>Sobre mí</SCInfoTileTitle>
      <SCInfoTilePhoto />
      <SCInfoTileDescription>I&apos;m Matías Salicrú, +2 years Frontend developer</SCInfoTileDescription>
      <SCInfoTileDescription>Here you can find some posts about interesting topics for me</SCInfoTileDescription>
    </SCInfoTileContainer>
  )
}
