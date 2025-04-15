// "use client";

// import { useState } from "react";
// import Container from "./Container";
// import DropdownMenu from "../common/DropDownMenu";
// import Link from "next/link";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { HiMiniXMark } from "react-icons/hi2";
// import Logo from "../common/Logo";
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion"

// const NavBar = () => {
//     const [mobileOpen, setMobileOpen] = useState(false);
//     const toggleMobile = () => setMobileOpen((prev) => !prev);


//     return (
//         <nav className="sticky top-0 z-50 border-b bg-white shadow-md text-sm">
//             <Container>
//                 <div className="flex justify-between items-center">
//                     <div>
//                         <Logo />
//                     </div>
//                     <div >
//                         <div className="hidden lg   :block">
//                             <ul className="flex items-center gap-5">
//                                 <li>
//                                     <DropdownMenu label="Home" href="/" links={[
//                                         { to: "/immigration", text: "Immigration" },
//                                         { to: "/student-visa", text: "Student Visa" },
//                                         { to: "/travel-agency", text: "Travel Agency" }
//                                     ]} />
//                                 </li>
//                                 <li>
//                                     <DropdownMenu label="Pages" href="/pages" links={[
//                                         { to: "/services", text: "Services" },
//                                         { to: "/service-details", text: "Service Details" },
//                                         { to: "/coaching", text: "Coaching" },
//                                         { to: "/coaching-details", text: "Coaching Details" },
//                                         { to: "/visa", text: "Visa" },
//                                         { to: "/visa-details", text: "Visa Details" },
//                                         { to: "/team", text: "Team" },
//                                         { to: "/team-details", text: "Team Details" },
//                                         { to: "/testimonial", text: "Testimonial" },
//                                         { to: "/faq", text: "FAQ" },
//                                     ]} />
//                                 </li>
//                                 <li>
//                                     <DropdownMenu label="About us" href="/about" />
//                                 </li>
//                                 <li>
//                                     <DropdownMenu label="Country" href="/country" links={[
//                                         { to: "/country", text: "Country" },
//                                         { to: "/country-details", text: "Country Details" },
//                                     ]} />
//                                 </li>
//                                 <li>
//                                     <DropdownMenu label="Blog" href="/blog" links={[
//                                         { to: "/blog", text: "Blog" },
//                                         { to: "/blog-details", text: "Blog Details" },
//                                     ]} />
//                                 </li>
//                                 <li>
//                                     <DropdownMenu label="Contact" href="/contact" />
//                                 </li>
//                             </ul>
//                         </div>
//                         <button onClick={toggleMobile} className="lg:hidden">
//                             {mobileOpen ? <HiMiniXMark size={24} /> : <RxHamburgerMenu size={24} />}
//                         </button>
//                     </div>

//                     <div className={`${mobileOpen ? "w-full" : "w-0"} h-full duration-300 absolute top-0 left-0 overflow-hidden lg:hidden  z-50`}  >
//                         <div className={`${mobileOpen ? "w-full" : "w-0"} h-full duration-300 bg-[rgba(0,0,0,0.4)] absolute overflow-hidden lg:hidden`} onClick={toggleMobile}>

//                         </div>
//                         <div className={`${mobileOpen ? "w-72" : "w-0"} duration-500 z-10  bg-white absolute top-0 left-0 h-full`}>
//                             <div className='flex flex-col h-full justify-between py-14 px-6'>
//                                 <div>
//                                     <div className="absolute top-0 right-0">
//                                         <button className='w-11 h-8 bg-lightBlue text-primary' onClick={toggleMobile}>
//                                             <HiMiniXMark className=' mx-auto' size={27} />
//                                         </button>
//                                     </div>
//                                     <div className='mb-10'>

//                                         <Logo />

//                                     </div>
//                                     <div>
//                                         <nav>
//                                             <Accordion type="single" collapsible className="w-full font-medium">
//                                                 <AccordionItem value="item-1">
//                                                     <AccordionTrigger>Home</AccordionTrigger>
//                                                     <AccordionContent>
//                                                         <ul>
//                                                             <li className="border-b border-border-dark py-3.5"><Link href={"/immigration"}>Immigration</Link></li>
//                                                             <li className="border-b border-border-dark py-3.5"><Link href={"/student-visa"}>Student Visa</Link></li>
//                                                             <li className="border-b border-border-dark py-3.5"><Link href={"/travel-agency"}>Travel Agency</Link></li>
//                                                         </ul>
//                                                     </AccordionContent>
//                                                 </AccordionItem>
//                                                 <AccordionItem value="item-2">
//                                                     <AccordionTrigger>Pages</AccordionTrigger>
//                                                     <AccordionContent>
//                                                         <ul>
//                                                             <li className="border-b border-border-dark py-3.5"><Link href={"/services"}>Services</Link></li>
//                                                             <li className="border-b border-border-dark py-3.5"><Link href={"/service-details"}>Service Details</Link></li>
//                                                             <li className="border-b border-border-dark py-3.5"><Link href={"/coaching"}>Coaching</Link></li>
//                                                             <li className="border-b border-border-dark py-3.5"><Link href={"/coaching-details"}>Coaching Details</Link></li>
//                                                             <li className="border-b border-border-dark py-3.5"><Link href={"/visa"}>Visa</Link></li>
//                                                             <li className="border-b border-border-dark py-3.5"><Link href={"/visa-details"}>Visa Details</Link></li>
//                                                             <li className="border-b border-border-dark py-3.5"><Link href={"/team"}>Team</Link></li>
//                                                             <li className="border-b border-border-dark py-3.5"><Link href={"/team-details"}>Team Details</Link></li>
//                                                             <li className="border-b border-border-dark py-3.5"><Link href={"/testimonial"}>Testimonial</Link></li>
//                                                             <li className="border-b border-border-dark py-3.5"><Link href={"/faq"}>FAQ</Link></li>
//                                                         </ul>
//                                                     </AccordionContent>
//                                                 </AccordionItem>
//                                                 <AccordionItem value="item-3">
//                                                     <div className="border-b border-border-dark py-3.5">
//                                                         <Link href={"/about"}>About us</Link>
//                                                     </div>
//                                                 </AccordionItem>
//                                                 <AccordionItem value="item-4">
//                                                     <AccordionTrigger>Country</AccordionTrigger>
//                                                     <AccordionContent>

//                                                         <ul>
//                                                             <li className="border-b border-border-dark py-3.5"><Link href={"/country"}>Country</Link></li>
//                                                             <li className="border-b border-border-dark py-3.5"><Link href={"/country-details"}>Country Details</Link></li>
//                                                         </ul>
//                                                     </AccordionContent>

//                                                 </AccordionItem>
//                                                 <AccordionItem value="item-5">
//                                                     <AccordionTrigger>Blog</AccordionTrigger>
//                                                     <AccordionContent>

//                                                         <ul>
//                                                             <li className="border-b border-border-dark py-3.5"><Link href={"/blog"}>Blog</Link></li>
//                                                             <li className="border-b border-border-dark py-3.5"><Link href={"/blog-details"}>Blog Details</Link></li>
//                                                         </ul>
//                                                     </AccordionContent>

//                                                 </AccordionItem>
//                                                 <AccordionItem value="item-6">
//                                                     <div className="border-b border-border-dark py-3.5">
//                                                         <Link href={"/contact"}>Contact</Link>
//                                                     </div>
//                                                 </AccordionItem>
//                                             </Accordion>

//                                         </nav>
//                                     </div>
//                                 </div>


//                             </div>

//                         </div>
//                     </div>

//                 </div>
//                 <div>
//                     <div>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium voluptatibus, incidunt iste doloribus repellendus autem in quos reiciendis dolores ea suscipit accusamus unde, dolorum ratione quod optio nostrum perspiciatis.
//                         Ratione autem consequatur illum rerum minima, odit ipsa ullam alias placeat a, enim totam suscipit! Quaerat deleniti facilis laudantium maiores, laboriosam illum repudiandae. Minus hic debitis saepe et vitae! Rerum!
//                         Officiis ducimus totam reprehenderit sunt ea nam maiores laborum fugiat, modi corrupti. Numquam iusto neque consequuntur et aliquam, odit illo aperiam quas deleniti officiis, modi expedita sed vitae repellat. Alias!
//                         Odit hic aliquid numquam eaque. Soluta earum incidunt beatae ea dignissimos, distinctio ducimus dolorem qui iste illum, veritatis minus alias eos obcaecati voluptatibus sapiente quaerat pariatur modi. Corporis, adipisci fugit.
//                         Cumque consequatur provident tenetur ut magnam! Eligendi impedit veniam vitae error, ad doloribus sint maxime harum dolorum delectus debitis, quae ex reiciendis nobis vel possimus, inventore officiis voluptates illo repudiandae.
//                         Totam odit harum dolorum expedita laborum quidem fugit vel, ratione eos exercitationem illo amet, tempora inventore velit quibusdam mollitia reiciendis quisquam magni asperiores delectus aperiam repellendus illum culpa? Atque, consectetur!
//                         Qui enim ad, esse repellendus laborum aspernatur corrupti dignissimos magni, illum aliquam animi veritatis reprehenderit odio doloribus dolore voluptatibus quae? Hic quisquam nihil placeat totam? Totam ducimus pariatur veniam voluptatem!
//                         Voluptatem, libero sequi rem facere tenetur tempora eaque deleniti alias quod non sint harum, vel nihil adipisci cum similique ipsa consequatur itaque, tempore optio voluptatibus in. Quasi necessitatibus nemo consectetur!
//                         Veritatis in sunt dolorem laborum vel dolore quis corporis facere nisi omnis. Sit id quos enim. Dicta reiciendis repellendus neque harum maxime beatae, unde quia odit, libero voluptatibus similique natus!
//                         Voluptatibus officiis molestias recusandae corporis ipsa aperiam mollitia eaque ullam fuga deleniti autem saepe nesciunt quasi at, quas asperiores, iusto neque corrupti distinctio. Recusandae iusto quas eveniet, voluptatem sed corporis?
//                         Nesciunt, perspiciatis. Hic quisquam id aliquid facilis odit, recusandae est ratione ipsam sint fugiat maxime consectetur tenetur expedita aliquam ducimus minima exercitationem quae aut officiis harum corrupti cumque. Pariatur, sequi.
//                         Consequuntur, cum fugit? Ducimus rem suscipit animi culpa, quas tempora labore dolorum laborum magnam corporis laudantium vel nihil saepe veritatis! Ducimus iste repudiandae tempore maiores nam libero culpa distinctio sapiente.
//                         Magnam eos rerum, omnis ea cum optio accusantium consequuntur nulla animi. Hic dignissimos perferendis atque, officiis explicabo quam odio sint omnis earum, laboriosam ducimus accusantium a minus. Nisi, distinctio facilis!
//                         Delectus optio recusandae ex neque ea aut dicta animi deleniti, porro ipsa quaerat esse nisi exercitationem rerum reprehenderit impedit, quia perspiciatis cupiditate, tempore voluptas. Tempora excepturi corrupti voluptatem necessitatibus neque.
//                         Adipisci, corporis architecto dignissimos similique voluptatum consectetur ad enim doloremque eaque laborum quibusdam perspiciatis illum. Beatae minima ratione nostrum facere, eius id omnis, sunt, nulla cupiditate laboriosam eligendi itaque veritatis?
//                         Iste tenetur facere consequuntur placeat dolores debitis vero facilis dolorum, ducimus magni rerum dicta soluta, eaque temporibus quia aspernatur laborum amet omnis deleniti. Totam soluta ipsam ullam veniam aut natus.
//                         Aut fugit voluptatem ex suscipit similique aliquam tempora laboriosam illum excepturi repellat sequi quasi deserunt, cupiditate architecto quia, atque ratione quibusdam ab rem ea eveniet qui. Impedit aliquam ipsam maiores.
//                         Quibusdam esse minus in. Quidem quos numquam soluta debitis placeat aperiam sint praesentium hic quam. Accusamus, quia natus rem ullam ea corporis, ad facilis dolorem, minima nisi similique odit quod?
//                         Aperiam, laborum velit praesentium maxime, quae, repudiandae beatae cupiditate facere exercitationem nesciunt laboriosam debitis minima esse in aut! Vel alias aliquid perspiciatis nihil amet voluptas eius ad veniam quod quae.
//                         Ab, adipisci. Sapiente, dicta animi? Corrupti ea nihil sapiente odit doloribus nesciunt impedit dignissimos, aut unde quis veniam eligendi perferendis repudiandae voluptatum harum fugiat aperiam ut cum a porro ex?
//                         Maiores laboriosam, ipsum iure laudantium numquam tempora. Ducimus earum consequatur, dolores, ullam sed officia aspernatur quisquam libero beatae eligendi ipsam quae, et ex neque impedit sunt similique doloremque saepe. Animi?
//                         Asperiores, est laborum cupiditate qui quis vero quae laboriosam eligendi quaerat alias eius at similique quia quasi necessitatibus expedita sit harum enim saepe exercitationem? Dolores corrupti expedita sequi voluptas saepe?
//                         Omnis a ipsum tenetur esse praesentium similique accusantium? Assumenda tenetur dolores culpa ratione sapiente soluta, facere iure expedita perferendis placeat veritatis minus amet tempora voluptatem porro nobis repellendus quia distinctio!
//                         Rerum, corrupti. Quisquam consequuntur pariatur libero aliquid ratione eius repellat? Fugit placeat natus maiores accusantium voluptatibus facilis fugiat ea veritatis culpa doloribus deserunt saepe modi itaque voluptas, velit sunt autem?
//                         Similique fuga nihil consectetur sit earum esse est quos recusandae voluptatem repellat ullam rem, itaque pariatur provident commodi repudiandae consequuntur numquam. Porro deleniti exercitationem dolor beatae illo odio veritatis aliquid!
//                         Ut iusto officia eius! Modi aspernatur, exercitationem consequatur harum repellat earum voluptatem unde dolorum minus maiores magnam. Exercitationem animi quis eum natus expedita modi aperiam asperiores, nobis dicta laboriosam voluptatum?
//                         Vero quod tempore quis dolorem excepturi itaque consectetur officia iste consequatur pariatur. Aut dolor voluptas harum cum ex? Ullam amet, a accusantium accusamus esse dolores voluptas reiciendis nostrum sequi earum?
//                         Ipsam ipsa modi doloremque. Blanditiis praesentium ratione enim sapiente, dolor vitae voluptatibus atque deserunt ut eaque quis sed culpa dolore! Vitae commodi omnis incidunt repudiandae suscipit deleniti sunt optio soluta.
//                         Ipsa similique commodi, laudantium reprehenderit inventore incidunt ullam, accusamus adipisci velit iusto quia voluptates. Quas culpa tenetur unde, facilis numquam impedit at repellendus. Nesciunt excepturi facere labore repellendus aliquam doloribus.
//                         Aliquid harum perferendis, qui nihil cupiditate, ratione culpa rem odit nobis sequi repudiandae molestiae sint facere excepturi eligendi autem mollitia dolore alias dolores reprehenderit cumque id provident quod enim. Incidunt!
//                         Eum rerum commodi quos sapiente ex porro, natus inventore omnis dolor asperiores veritatis ullam recusandae temporibus eos. Earum optio dignissimos iste aliquam esse expedita officiis itaque quis. Maiores, eligendi eveniet.
//                         Consectetur qui eaque ipsa placeat architecto totam ea, quasi nemo voluptatem harum fugiat maiores. Sequi expedita voluptas facilis suscipit aliquam! Tenetur quis quisquam ducimus quia error assumenda hic doloribus accusamus!
//                         Praesentium cupiditate quasi vero dolores minus animi iusto magni corrupti ipsam atque, facilis quaerat quia voluptas dolore aperiam suscipit tenetur doloremque error asperiores reprehenderit. Consequuntur, libero. Iusto sed amet dolore?
//                         Ut nostrum dolores ducimus saepe animi quam cum ex dicta eaque magni in nihil, illo pariatur! Sapiente voluptatibus est expedita molestias sunt tempore consequuntur minima repellendus, totam, quas consequatur explicabo.
//                         Eligendi minus provident, facilis voluptas, maiores aut, vel quos porro tempora odit ea cumque a! Enim tempore iusto, atque laudantium adipisci ullam incidunt veniam non sed dignissimos unde repellendus sapiente.
//                         Praesentium, officiis optio! A, totam unde beatae harum consequatur dolore tenetur cupiditate. Deleniti possimus corporis aut unde assumenda perferendis quia delectus distinctio quos numquam. Illum explicabo commodi placeat quasi nisi?
//                         Natus atque culpa iste minima, possimus libero voluptatibus assumenda labore facilis! Explicabo eligendi libero qui expedita harum! Asperiores nulla labore excepturi vitae velit ex nobis iste. Quisquam pariatur numquam voluptatibus.
//                         Minima ipsa eligendi vel officia ducimus ab explicabo accusamus mollitia repellat pariatur tempora et reiciendis eius fugiat, consequuntur facilis? Illo iste nihil corrupti officiis aliquam magnam amet vel tempore. Sunt.
//                         In cupiditate voluptatum perferendis ea debitis earum velit placeat quos nesciunt, architecto accusantium ex doloribus officia qui adipisci natus at eius rem modi quidem itaque mollitia! Nihil neque porro reprehenderit.
//                         Aut consequuntur, natus qui deleniti dicta consectetur architecto similique consequatur distinctio amet ex labore dignissimos impedit voluptas cumque vero, quos laboriosam illo quisquam est alias explicabo expedita iste. Asperiores, ad.
//                         At repellendus autem voluptatem, nemo dolor nihil repellat nulla porro minima vel aspernatur commodi consectetur deleniti voluptates similique corporis quasi eveniet maxime qui? Quam, at officiis similique laudantium nulla quas!
//                         Consequuntur dolor ipsa ipsum dignissimos aliquam officia vel atque? Deleniti nobis in, voluptatibus quisquam, eveniet dicta sunt ut, dolores non eos temporibus magnam corporis ex autem perferendis? Minus, nemo similique.
//                         Eligendi vero, odio delectus amet veritatis voluptatibus ut accusantium necessitatibus, quae deserunt nihil iste, eveniet optio dolorem dignissimos ipsum enim fuga repudiandae. Earum rem totam placeat cumque esse ipsum tempora.
//                         Numquam minima doloremque molestias aliquam cupiditate delectus, magnam perspiciatis voluptas fugit ipsum aut asperiores quidem quis aliquid dicta accusamus tenetur? Quam architecto recusandae amet, blanditiis molestias quidem optio aut ipsam.
//                         Eaque atque autem exercitationem, molestias mollitia minima aliquid quae, maxime, repudiandae ex consequatur officia. Officia, fuga, cupiditate assumenda iusto dicta error tempora temporibus voluptatibus praesentium animi laborum fugit, libero adipisci.
//                         Aut provident natus distinctio tempora totam nam, dolore, dolorum quia temporibus odio necessitatibus asperiores sequi, voluptatum id cum veniam facilis perspiciatis vel? Sed numquam ea labore consectetur ad beatae asperiores.
//                         Dignissimos iure nisi quos optio numquam possimus est perferendis dolorem ab nulla odit quia voluptas voluptatum nobis, tenetur aperiam distinctio accusamus, a minus commodi natus. Optio iste unde quia nihil.
//                         Id numquam accusamus iure deleniti atque officia totam dolorum, nisi, dignissimos sunt sequi cumque. Adipisci numquam tempora facilis dolore impedit quod, facere dolor quasi id, nemo dicta sequi eum quas.
//                         Perspiciatis perferendis, esse ipsum ducimus, voluptas dignissimos corrupti cumque non architecto dolorum voluptatum similique velit ut consequatur adipisci quam tenetur! Porro reiciendis nostrum ad voluptatibus quia aspernatur ullam commodi? Adipisci!
//                         Vitae, quas eveniet recusandae ratione debitis id temporibus illo maxime fugiat rem est nobis, porro iste reiciendis quidem earum nam qui perspiciatis. Optio quas voluptatibus incidunt commodi omnis perspiciatis voluptatum!
//                     </div>
//                 </div>
//             </Container>
//         </nav>
//     );
// }

// export default NavBar;


"use client";

import { useState } from "react";
import Container from "./Container";
import DropdownMenu from "../common/DropDownMenu";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMiniXMark } from "react-icons/hi2";
import Logo from "../common/Logo";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

// Define your navigation items in a single source of truth
const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    links: [
      { to: "/immigration", text: "Immigration" },
      { to: "/student-visa", text: "Student Visa" },
      { to: "/travel-agency", text: "Travel Agency" }
    ]
  },
  {
    label : "Pages",
    href : "/pages",
    links: [
        { to: "/services", text: "Services" },
        { to: "/service-details", text: "Service Details" },
        { to: "/coaching", text: "Coaching" },
        { to: "/coaching-details", text: "Coaching Details" },
        { to: "/visa", text: "Visa" },
        { to: "/visa-details", text: "Visa Details" },
        { to: "/team", text: "Team" },
        { to: "/team-details", text: "Team Details" },
        { to: "/testimonial", text: "Testimonial" },
        { to: "/faq", text: "FAQ" },
    ]
  },
    {
        label: "About us",
        href: "/about",
    },
    {
        label: "Country",
        href: "/country",
        links: [
        { to: "/country", text: "Country" },
        { to: "/country-details", text: "Country Details" },
        ]
    },
    {
        label: "Blog",
        href: "/blog",
        links: [
        { to: "/blog", text: "Blog" },
        { to: "/blog-details", text: "Blog Details" },
        ]
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

const MobileMenu = ({ isOpen, onClose }) => {
    return (
      <>
        {/* Overlay with transition */}
        <div 
          className={`fixed inset-0 bg-black z-40 lg:hidden transition-opacity duration-300 ${
            isOpen ? "opacity-40" : "opacity-0 pointer-events-none"
          }`}
          onClick={onClose}
        />
        
        {/* Sidebar with sliding transition */}
        <div 
          className={`fixed inset-y-0 left-0 w-72 bg-white z-50 shadow-xl transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className='flex flex-col h-full justify-between py-14 px-6'>
            <div>
              <div className="absolute top-0 right-0">
                <button 
                  className='w-11 h-8 bg-lightBlue text-primary'
                  onClick={onClose}
                  aria-label="Close menu"
                >
                  <HiMiniXMark className='mx-auto' size={27} />
                </button>
              </div>
              <div className='mb-10'>
                <Logo />
              </div>
              <nav>
                <Accordion type="single" collapsible className="w-full font-medium">
                  {NAV_ITEMS.map((item, index) => (
                    <AccordionItem key={`item-${index}`} value={`item-${index}`}>
                      {item.links ? (
                        <>
                          <AccordionTrigger>{item.label}</AccordionTrigger>
                          <AccordionContent>
                            <ul>
                              {item.links.map((link, linkIndex) => (
                                <li key={linkIndex} className="border-b border-border-dark py-3.5">
                                  <Link href={link.to}>{link.text}</Link>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </>
                      ) : (
                        <div className="border-b border-border-dark py-3.5">
                          <Link href={item.href}>{item.label}</Link>
                        </div>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  const NavBar = () => {
      const [mobileOpen, setMobileOpen] = useState(false);
      const toggleMobile = () => setMobileOpen((prev) => !prev);
  
      return (
          <nav className="sticky top-0 z-50 border-b bg-white shadow-md text-sm">
              <Container>
                  <div className="flex justify-between items-center py-4">
                      <div>
                          <Logo />
                      </div>
                      
                      {/* Desktop Navigation */}
                      <div className="hidden lg:block">
                          <ul className="flex items-center gap-5">
                              {NAV_ITEMS.map((item, index) => (
                                  <li key={index}>
                                      <DropdownMenu 
                                          label={item.label}
                                          href={item.href}
                                          links={item.links}
                                      />
                                  </li>
                              ))}
                          </ul>
                      </div>
                      
                      {/* Mobile Menu Button */}
                      <button 
                          onClick={toggleMobile}
                          className="lg:hidden p-2"
                          aria-label="Toggle menu"
                          aria-expanded={mobileOpen}
                      >
                          {mobileOpen ? <HiMiniXMark size={24} /> : <RxHamburgerMenu size={24} />}
                      </button>
                  </div>
                  
                  {/* Mobile Menu - Always rendered but hidden off-screen */}
                  <MobileMenu isOpen={mobileOpen} onClose={toggleMobile} />
              </Container>
          </nav>
      );
  }

export default NavBar;