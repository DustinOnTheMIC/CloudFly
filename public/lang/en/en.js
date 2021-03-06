import publicCloud from "../../../assets/images/public-cloud.png";
import vpc from "../../../assets/images/vpc.png";
import privateCloud from '../../../assets/images/private-cloud.png';
import dedicatedServer from '../../../assets/images/dedicated-server.png';
import colocation from '../../../assets/images/colocation.png';
import solutions from '../../../assets/images/solitions-server.png';
import logo from '../../../assets/images/logo.png';
import solution from '../../../assets/images/solution-business.svg';
import easyScreen from '../../../assets/images/easy-screen.png';
import costSave from '../../../assets/images/cost-save.png';
import slide1 from '../../../assets/images/slide1.jpg';
import network from '../../../assets/images/network.svg';

import message from '../../../assets/images/message.png';
import message3 from '../../../assets/images/message3.png';
import sendMail from '../../../assets/images/mail.png';

import partner1 from '../../../assets/images/partner1.png';
import partner2 from '../../../assets/images/partner2.png';
import partner3 from '../../../assets/images/partner3.png';
import partner4 from '../../../assets/images/partner4.png';

const content = {
    internal: {
        ads: `This line is for the event that you want to add to the web side`,
        logo: logo,
        email: "contact@cloudfly.vn",
        phoneNumber: "0904 558 448",
        header: {
            menu: [
                {
                    title: "Products",
                    id:"products",
                    items: [
                        {
                            title: "Cloud Server", 
                            img: publicCloud, 
                            href: "#", 
                            content: "Hourly payment, superior speed, safety and stability"
                        },
                        {
                            title: "Cloud Server", 
                            img: publicCloud, 
                            href: "#", 
                            content: "Hourly payment, superior speed, safety and stability"
                        },
                        {
                            title: "Cloud Server", 
                            img: publicCloud, 
                            href: "#", 
                            content: "Hourly payment, superior speed, safety and stability"
                        },
                        {
                            title: "Cloud Server", 
                            img: publicCloud, 
                            href: "#", 
                            content: "Hourly payment, superior speed, safety and stability"
                        },
                    ]
                },
                {
                    title: "Customer",
                    href: "#",
                    id: "customer"
                },
                {
                    title: "Help",
                    id: "help",
                    items: [
                        {
                            title: "Document", 
                            img: publicCloud, 
                            href: "#", 
                            content: "content..."
                        },
                        {
                            title: "TechBlog", 
                            img: publicCloud, 
                            href: "#", 
                            content: "content...."
                        },
                        {
                            title: "Blog", 
                            img: publicCloud, 
                            href: "#", 
                            content: "content..."
                        }
                    ]
                },
                {
                    title: "Other Services",
                    id: "otherServices",
                    items: [
                        {
                            title: "Domain", 
                            img: publicCloud, 
                            href: "#", 
                            content: "content..."
                        },
                        {
                            title: "SSL", 
                            img: publicCloud, 
                            href: "#", 
                            content: "content..."
                        },
                        {
                            title: "Software", 
                            img: publicCloud, 
                            href: "#", 
                            content: "content..."
                        }
                    ]
                },
                {
                    title: "About Us",
                    href: "#"
                },
            ],
            button: [
                {id: "signIn", title: "Sign In"},
                {id: "signUp", title: "Sign Up"}
            ]
        },
        customer: {
            title: "TRUSTED BY 10,000+ HAPPY CUSTOMERS WORLDWIDE",
            items: [
                {
                    img: publicCloud,
                    title: "H??? t???ng m???nh m???"
                },
                {
                    img: publicCloud,
                    title: "?????i ng?? k??? thu???t chuy??n nghi???p 24/7"
                },
                {
                    img: publicCloud,
                    title: "Cam k???t ch???t l?????ng d???ch v??? SLA"
                },
                {
                    img: publicCloud,
                    title: "Cam k???t 100% ho??n ti???n"
                }
            ]
        },
        carouselIntroduce: {
            items: [
                {
                    img: slide1,
                    description:"The description for slide 1",
                    subLine: "...",
                    active: true,
                    slide: 0
                },
                {
                    img: slide1,
                    description:"The description for slide 2",
                    subLine: "...",
                    slide: 1
                },
                {
                    img: slide1,
                    description:"The description for slide 3",
                    subLine: "...",
                    slide: 2
                }
            ]
        },
        testimonials: {
            title: "What customer talk about us",
            items: [
                {
                    active: true,
                    content: `Ut elementum a elit sed tristique. Pellentesque sed semper
                        erat. Orci varius natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Aenean quam erat, rutrum ut
                        malesuada.`,
                    from: "William Smith",
                    position: "New Co-Founder",
                    slide: 0
                },
                {
                    content: `Quisque lacinia sed velit et maximus. Quisque dictum, lacus a
                    malesuada finibus, arcu magna luctus risus, eu accumsan risus
                    elit vitae lacus.`,
                    from: "Vinny Smart",
                    position: "Digital Marketer",
                    slide: 1
                },
                {
                    content: `Vestibulum mauris ipsum, tempor tincidunt justo sit amet,
                    bibendum tincidunt dui. Aenean molestie, odio quis viverra
                    ultricies, leo tellus lacinia neque, sit amet maximus tortor
                    nunc aliquet felis.`,
                    from: "Trevor Liam",
                    position: "Technology Chef",
                    slide: 2
                }
            ]
        },
        partner: {
            title: "CloudFly's partners",
            content: `While we are at the forefront of and specialize
                in design-build, we are very familiar with a number of
                delivery methods and are confident we can find the 
                process that will best help you meet your goals.`,
            img: [partner1, partner2, partner3, partner4, partner1,
                partner2, partner3, partner4, partner1, partner2, partner3, partner4]
        },
        trial: {
            title: "Trial now for free",
            content: `Try the service for free for 3 days to test the platform
                product, your application`,
            img: network,
            button: "Try now"
        },
        support: {
            title: "Need help?",
            content: "Contact our 24/7 support team",
            items: [
                {
                    title: "Send mail",
                    content: `You need more information?
                        Send email us and we will answer it.`,
                    img: sendMail
                },
                {
                    title: "Send Ticket",
                    content: `The channel to receive support services for CloudFly's customers.`,
                    img: message
                },
                {
                    title: "Live Chat",
                    content: "You have questions? Chat immediately with our consultant for answers.",
                    img: message3
                }
            ]
        },
        footer: {
            via: "Power by iNET",
            options: [
                {
                    title: "Products",
                    items: [
                        {title: "Cloud Server", href: "/cloud-server"},
                        {title: "Virtual Private Cloud", href: "/virtual-private-cloud"},
                        {title: "Private Cloud", href: "/private-cloud"},
                        {title: "Colocation", href: "/cho-thue-cho-dat-may-chu"},
                        {title: "Dedicated Server", href: "/cho-thue-may-chu"},
                        {title: "Solution", href: "/giai-phap"},
                        {title: "Cloud Storage", href: "/cloud-storage"},
                        {title: "Container", href: "/container"},
                        {title: "System integration", href: "/tich-hop-he-thong"},
                        {title: "cPanel", href: "/cpanel"},
                        {title: "DirectAdmin", href: "/directadmin"}
                    ]
                },
                {
                    title: "Company",
                    items: [
                        {title: "Introduce", href: "/gioi-thieu"},
                        {title: "Recruitment", href: "/tuyen-dung"},
                        {title: "Customer", href: "/khach-hang"},
                        {title: "Security", href: "/chinh-sach-bao-mat"},
                        {title: "Using regulation", href: "/quy-dinh-su-dung"},
                        {title: "Services pledge", href: "/cam-ket-dich-vu"},
                        {title: "Promotional", href: "/khuyen-mai"}
                    ]
                },
                {
                    title: "Help",
                    items: [
                        {title: "Payment", href: "#"},
                        {title: "Instructions for use", href: "/docs"},
                        {title: "Technologies doc", href: "/techblog"},
                        {title: "Contact", href: "/lien-he"}
                    ]
                },
            ],
            follow: {
                title: "Follow us",
                items: [
                    {title: "Facebook", href: "https://www.facebook.com/cloudfly.vn", icon: "fab fa-facebook-f"},
                    {title: "LinkedIn", href: "#", icon: "fab fa-linkedin-in"},
                    {title: "Youtube", href: "#" ,icon: "fab fa-youtube"},
                    {title: "Twitter", href: "#", icon: "fab fa-twitter"}
                ]
            },
            address: [
                {
                    title: "Ha Noi",
                    items: [ 
                        {title: "INET building, 247 Cau Giay, Dich Vong ward, Cau Giay district", icon: "fa fa-map-marker"},
                        {title: "Email: contact@CloudFly.vn", icon: "fa fa-envelope"},
                        {title: "Hotline: 0904 558 448", icon: "fa fa-phone-square"}
                    ]
                },
                {
                    title: "Ho Chi Minh city",
                    items: [
                        {title: "Arrow building, 40 Hoang Viet, 4 ward, Tan Binh district", icon: "fa fa-map-marker"},
                        {title: "Email: contact@CloudFly.vn", icon: "fa fa-envelope"},
                        {title: "Hotline: 0904 558 448", icon: "fa fa-phone-square"}
                    ]
                },
                {
                    title: "Da Nang city",
                    items: [
                        {title: "S-HOME building, 56 Nguyen Tri Phuong, Chinh Giang ward, Thanh Khe district", icon: "fa fa-map-marker"},
                        {title: "Email: contact@CloudFly.vn", icon: "fa fa-envelope"},
                        {title: "Hotline: 0904 558 448", icon: "fa fa-phone-square"}
                    ]
                }
            ],
            copyright: [
                "?? Copyright 2021 CloudFly. CloudFly company",
                "56 Nguyen Tri Phuong, Chinh Giang ward, Thanh Khe district, Danang city",
                "Representative : Mr. Luu Van Vuong",
                "Tax code 0402035884 issued at the department of planning and investment of Danang City"
            ]

        },
        
        
    },
    
    homePage: {
        products: {
            title: "Our services",
            description: `The best choice for the digital
                transformation era with high-performance cloud 
                infrastructure. You just need to focus on developing 
                your amazing apps and products, let us help you with 
                the rest.`,
            button: "Show More",
            items: [
                {
                    img: publicCloud,
                    title: "Cloud Server",
                    content: "Kh???i t???o Cloud Server nhanh ch??ng tr??n h??? t???ng ??i???n to??n ????m m??y s??? d???ng 100% SSD",
                    href: "#"
                },
                {
                    img: vpc,
                    title: "Virtual Private Cloud",
                    content: "B???o m???t t??i nguy??n ????m m??y c???a b???n v???i c??c k???t n???i n???i b??? trong h??? t???ng Cloud Server",
                    href: "#"
                },
                {
                    img: privateCloud,
                    title: "Private Cloud",
                    content: "Gi???i ph??p x??y d???ng h??? t???ng ??i???n to??n ????m m??y cho doanh nghi???p tr??n n???n t???ng OpenStack",
                    href: "#"
                },
                {
                    img: dedicatedServer,
                    title: "Dedicated Server",
                    content: "M??y ch??? v???t l?? chuy??n d???ng v???i c???u h??nh m???nh m??? tr??n c??c trung t??m d??? li???u ?????t chu???n qu???c t???",
                    href: "#"
                },
                {
                    img: colocation,
                    title: "Colocation",
                    content: " Cho thu?? ch??? ?????t m??y ch??? t???i c??c trung t??m d??? li???u ?????t chu???n qu???c t??? Tier 3",
                    href: "#"
                },
                {
                    img: solutions,
                    title: "Solutions",
                    content: "T?? v???n v?? tri???n khai c??c gi???i ph??p t??ch h???p h??? th???ng, ??i???n to??n ????m m??y cho doanh nghi???p",
                    href: "#"
                }
            ],
        },
        benefit: {
            block1: {
                title: "H??? t???ng ????p ???ng cho m???i doanh nghi???p",
                img: solution,
                items: [
                    {
                        title: "Kh???ng ?????nh th????ng hi???u", 
                        content: `T???o m???i quan h??? l??u d??i v?? tin t?????ng nh???t ?????nh v??o m???t h??? th???ng ho???t ?????ng ???n ??inh. 
                            T??? ???? c?? th??? ????p ???ng t???i ??a y??u c???u c???a kh??ch h??ng.`
                    },
                    {
                        title: "Ph??t tri???n s???n ph???m hi???u qu???",
                        content: `Ti???t ki???m th???i gian v?? ngu???n l???c trong vi???c x??y d???ng c?? s??? h??? t???ng. 
                            T??? ???? t???p trung h??n cho vi???c ph??t tri???n ???ng d???ng, c???i ti???n s???n ph???m.`
                    },
                    {
                        title: "Tri???n khai v?? m??? r???ng nhanh ch??ng",
                        content: `Kh???i t???o m??i tr?????ng ngay t???c th?? v???i t???p ???ng d???ng ????ng g??i s???n v??
                            m??? r???ng nhanh ch??ng ch??? v???i v??i c?? click chu???t gi??p ti???t ki???m t???i ??a chi ph?? th???i gian.`
                    }
                ]
            },
            block2: {
                title: "Giao di???n qu???n l?? m???nh m???, tr???c quan",
                description: `Qu???n tr??? ????n gi???n, kh???i t???o nhanh ch??ng c??ng v???i th?? vi???n h??? ??i???u h??nh, 
                    ???ng d???ng ph??ng ph??. H??? tr??? nhi???u t??nh n??ng, ti???n ??ch qu???n l?? ??a d???ng v?? h??n th??? n???a.`,
                    img: easyScreen,
                items: [
                    '99.9% Uptime SLA', 
                    'IPv6 Support', 
                    'DNS management', 
                    'Local Network', 
                    'Backup', 
                    'Snapshot', 
                    'Firewall', 
                    'Metric Monitoring'
                ]
            },
            block3: {
                title: "S??? l???a ch???n h??ng ?????u v??? hi???u qu??? chi ph??",
                img: costSave,
                items: [
                    {
                        title: "Thi???t k??? t???i ??u", 
                        content: `C??c g??i ???????c d???ch v??? ???????c nghi??n c???u v?? thi???t k??? t???i ??u
                            v???i nhi???u c???p ????? t??i nguy??n nh???m ph???c v??? cho m???i nhu c???u c???a kh??ch h??ng.`
                    },
                    {
                        title: "Chi tr??? theo gi???",
                        content: `H??? th???ng x??? l?? thanh to??n th??ng minh h???ng gi???, h???ng ng??y, h???ng th??ng. 
                            B???n ch??? chi tr??? cho nh???ng g?? s??? d???ng v?? chi ph?? c?? th??? d??? ??o??n ???????c.`
                    },
                    {
                        title: "Gi?? th??nh c???nh tranh",
                        content: `B???ng gi?? d???ch v??? c???nh tranh, ph?? h???p v???i m???i nhu c???u kh??ch h??ng.
                            H??? t???ng ???????c ?????u t?? v?? ???ng d???ng nhi???u c??ng ngh??? hi???n ?????i mang l???i ch???t l?????ng v?????t tr???i.`
                    }
                ]
            },
        }
    }
}

export default content;