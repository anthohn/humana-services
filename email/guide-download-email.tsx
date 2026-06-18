import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type GuideDownloadEmailProps = {
  firstName: string;
  downloadUrl: string;
};

export default function GuideDownloadEmail({
  firstName,
  downloadUrl,
}: GuideDownloadEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Votre guide Humana Services est prêt !</Preview>
      <Tailwind>
        <Body className="bg-[#FDFBF7] font-sans text-gray-800 my-auto mx-auto">
          <Container className="border border-solid border-[#E7DFF5] rounded-[2rem] my-[40px] mx-auto p-[30px] max-w-[465px] bg-white shadow-lg">
            <Section className="mt-[32px] text-center">
              <Heading className="text-[28px] font-serif text-[#4A3B69] font-normal p-0 my-[30px] mx-0">
                Humana Services
              </Heading>
            </Section>
            <Heading className="text-[20px] font-medium text-[#4A3B69] p-0 my-[20px] mx-0 leading-tight">
              Bonjour {firstName},
            </Heading>
            <Text className="text-[16px] leading-[24px] text-[#666070]">
              Merci pour l&apos;intérêt que vous portez à notre guide d&apos;accompagnement pour les proches aidants. Nous espérons sincèrement qu&apos;il vous apportera du soutien, des conseils pratiques et un peu de douceur au quotidien.
            </Text>
            <Text className="text-[16px] leading-[24px] text-[#666070]">
              Vous pouvez le télécharger dès maintenant en cliquant sur le lien ci-dessous :
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Link
                className="bg-[#4A3B69] text-white text-[16px] font-medium no-underline text-center px-6 py-4 rounded-full inline-block hover:bg-[#3D3058] transition-colors"
                href={downloadUrl}
              >
                Télécharger le guide (PDF)
              </Link>
            </Section>
            <Text className="text-[14px] leading-[22px] text-[#666070] italic">
              Si le bouton ci-dessus ne fonctionne pas, vous pouvez copier et coller ce lien dans votre navigateur :<br />
              <Link href={downloadUrl} className="text-[#4A3B69] underline break-all">
                {downloadUrl}
              </Link>
            </Text>
            <Hr className="border border-solid border-[#E7DFF5] my-[26px]" />
            <Text className="text-[12px] leading-[18px] text-[#9E9AA6]">
              Ce guide est fourni à titre informatif par Humana Services à Gland. Pour toute question ou demande de soutien à domicile, n&apos;hésitez pas à nous contacter sur <Link href="https://www.humana-services.ch" className="text-[#4A3B69] underline">www.humana-services.ch</Link> ou par téléphone au 078 221 38 21.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
