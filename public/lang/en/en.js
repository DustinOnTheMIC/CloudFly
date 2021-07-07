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
                "© Copyright 2021 CloudFly. CloudFly company",
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
            items: [
                {
                    img: publicCloud,
                    title: "Cloud Server",
                    content: "Khởi tạo Cloud Server nhanh chóng trên hạ tầng điện toán đám mây sử dụng 100% SSD"
                },
                {
                    img: vpc,
                    title: "Virtual Private Cloud",
                    content: "Bảo mật tài nguyên đám mây của bạn với các kết nối nội bộ trong hạ tầng Cloud Server"
                },
                {
                    img: privateCloud,
                    title: "Private Cloud",
                    content: "Giải pháp xây dựng hạ tầng điện toán đám mây cho doanh nghiệp trên nền tảng OpenStack"
                },
                {
                    img: dedicatedServer,
                    title: "Dedicated Server",
                    content: "Máy chủ vật lý chuyên dụng với cấu hình mạnh mẽ trên các trung tâm dữ liệu đạt chuẩn quốc tế"
                },
                {
                    img: colocation,
                    title: "Colocation",
                    content: " Cho thuê chỗ đặt máy chủ tại các trung tâm dữ liệu đạt chuẩn quốc tế Tier 3"
                },
                {
                    img: solutions,
                    title: "Solutions",
                    content: "Tư vấn và triển khai các giải pháp tích hợp hệ thống, điện toán đám mây cho doanh nghiệp"
                }
            ],
        },
        benefit: {
            block1: {
                title: "Hạ tầng đáp ứng cho mọi doanh nghiệp",
                img: solution,
                items: [
                    {
                        title: "Khẳng định thương hiệu", 
                        content: `Tạo mối quan hệ lâu dài và tin tưởng nhất định vào một hệ thống hoạt động ổn đinh. 
                            Từ đó có thể đáp ứng tối đa yêu cầu của khách hàng.`
                    },
                    {
                        title: "Phát triển sản phẩm hiệu quả",
                        content: `Tiết kiệm thời gian và nguồn lực trong việc xây dựng cơ sở hạ tầng. 
                            Từ đó tập trung hơn cho việc phát triển ứng dụng, cải tiến sản phẩm.`
                    },
                    {
                        title: "Triển khai và mở rộng nhanh chóng",
                        content: `Khởi tạo môi trường ngay tức thì với tập ứng dụng đóng gói sẵn và
                            mở rộng nhanh chóng chỉ với vài cú click chuột giúp tiết kiệm tối đa chi phí thời gian.`
                    }
                ]
            },
            block2: {
                title: "Giao diện quản lý mạnh mẽ, trực quan",
                description: `Quản trị đơn giản, khởi tạo nhanh chóng cùng với thư viện hệ điều hành, 
                    ứng dụng phóng phú. Hỗ trợ nhiều tính năng, tiện ích quản lý đa dạng và hơn thế nữa.`,
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
                title: "Sự lựa chọn hàng đầu về hiệu quả chi phí",
                img: costSave,
                items: [
                    {
                        title: "Thiết kế tối ưu", 
                        content: `Các gói được dịch vụ được nghiên cứu và thiết kế tối ưu
                            với nhiều cấp độ tài nguyên nhằm phục vụ cho mọi nhu cầu của khách hàng.`
                    },
                    {
                        title: "Chi trả theo giờ",
                        content: `Hệ thống xử lý thanh toán thông minh hằng giờ, hằng ngày, hằng tháng. 
                            Bạn chỉ chi trả cho những gì sử dụng và chi phí có thể dự đoán được.`
                    },
                    {
                        title: "Giá thành cạnh tranh",
                        content: `Bảng giá dịch vụ cạnh tranh, phù hợp với mọi nhu cầu khách hàng.
                            Hạ tầng được đầu tư và ứng dụng nhiều công nghệ hiện đại mang lại chất lượng vượt trội.`
                    }
                ]
            },
        }
    }
}

export default content;