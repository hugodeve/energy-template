import imgFacade from "./assets/inno-grid.webp";
import imgElectrical from "./assets/inno-panel.webp";
import imgPainting from "./assets/inno-wind.webp";
import aboutUsImage1 from "./assets/about-us-image1.webp"; // Imagen para "Segurança de Obra"
import aboutUsImage2 from "./assets/about-us-image2.webp"; // Imagen para "Referência"
import aboutUsImage3 from "./assets/about-us-image3.webp"; // Imagen para "Do início ao Fim"
import aboutUsIntroImage from "./assets/about-us-intro.webp"; // Imagen para la sección introductoria (opcional)

export const innovationsSection = {
  title: "Latest Innovations in Renovations and Maintenance",
  subheading1_1: "Discover Our Cutting-edge",
  subheading1_2: " Renovation and Maintenance Solutions",
  innovations: [
    {
      title: "Facade Cleaning and Restoration",
      description:
        "Rejuvenate the exterior of your building with our advanced facade cleaning technology. Our solutions effectively remove dirt, pollutants, and grime, restoring the beauty of your property while ensuring long-lasting protection. Our innovative techniques offer enhanced results with minimal environmental impact, bringing new life to your facades.",
      visual: imgFacade,
    },
    {
      title: "Advanced Electrical Systems",
      description:
        "Stay safe and efficient with our cutting-edge electrical installation and repair services. We use the latest tools and technologies to ensure your electrical systems are optimized for performance and safety, while adhering to the highest industry standards. Whether for residential or industrial settings, our solutions offer reliability and sustainability.",
      visual: imgElectrical,
    },
    {
      title: "Next-level Painting and Finishing",
      description:
        "Transform your spaces with our innovative painting solutions. We use eco-friendly, high-durability paints that provide a fresh look and protect your surfaces for years to come. Our advanced finishing techniques ensure flawless results, whether you're updating a home or an industrial site.",
      visual: imgPainting,
    },
  ],
  visual: "renovations-section-image.jpg",
  callToAction: "Explore the Future of Renovation and Maintenance with [Company Name]",
  button: "Learn More",
};

export const aboutUsSection = {
  title: 'Por que Somos "Resolve"?',
  subheading1: "",
  subheading2: "",
  intro: {
    headline: 'Por que Somos "Resolve"?',
    description:
      "As atividades da Resolve Administração e Execução de Serviços tiveram início em 2018, quando firmamos uma aliança estratégica com empresa de atuação destacada no ramo de Segurança Eletrônica voltada para condomínios residenciais e comerciais em Curitiba/PR. Desde então, nos dedicamos ao gerenciamento de obras que atendam aos objetivos de qualidade, prazo e custos de cada cliente, com vistas à valorização do seu patrimônio.\n\nAtuamos com construções e reformas nos campos arquitetônico, estrutural, instalações.\n\nPlantão para manutenções emergenciais 24 horas.",
    image: aboutUsIntroImage, // Puedes asignar una imagen para la sección introductoria o dejarlo como null si no quieres imagen
  },
  sections: [
    {
      headline: "Segurança de Obra",
      description:
        "Mais Segurança para sua obra e para seu bolso. Nossos serviços são assegurados pela AIG.",
      image: aboutUsImage1,
    },
    {
      headline: "Referência",
      description:
        "Qualidade, segurança e conforto. Com 5 anos no mercado, nos tornamos especialistas no setor.",
      image: aboutUsImage2,
    },
    {
      headline: "Do início ao Fim",
      description:
        "Realizamos o projeto e executamos a obra desde a fundação até a entrega das chaves na mão.",
      image: aboutUsImage3,
    },
  ],
};