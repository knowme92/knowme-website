document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       01. SETTINGS
    ========================================================= */

    /*
        ՀԻՄԱ default-ը հայերեն է։

        Երբ կայքը հրապարակենք և ուզես
        հիմնական լեզուն լինի English՝

        "hy" փոխիր "en"
    */

    const DEFAULT_LANGUAGE = "en";

    const WHATSAPP_PHONE = "37498400729";


    /* =========================================================
       02. HELPERS
    ========================================================= */

    const $ = (selector, parent = document) =>
        parent.querySelector(selector);


    const $$ = (selector, parent = document) =>
        [...parent.querySelectorAll(selector)];


    function setText(selector, value, parent = document) {

        const element = $(selector, parent);

        if (!element || value === undefined) {
            return;
        }

        element.textContent = value;
    }


    function setTexts(selector, values, parent = document) {

        $$(selector, parent).forEach((element, index) => {

            if (values[index] !== undefined) {

                element.textContent =
                    values[index];

            }

        });

    }


    /* =========================================================
       03. TRANSLATIONS
    ========================================================= */

    const translations = {

        /* =====================================================
           ARMENIAN
        ===================================================== */

        hy: {

            pageTitle:
                "Web Service | Կայքերի պատրաստում",

            metaDescription:
                "Ստեղծում եմ ժամանակակից և արագ կայքեր՝ մատչելի գներով։",


            nav: [
                "Գլխավոր",
                "Ծառայություններ",
                "Աշխատանքներ",
                "Գներ",
                "Կապ"
            ],


            hero: {

                badge:
                    "Խելացի վեբ լուծումներ",

                title:
                    "Ստեղծում եմ ժամանակակից և արագ կայքեր՝ մատչելի գներով",

                description:
                    "Ստեղծում եմ արագ, գեղեցիկ, անվտանգ և mobile-friendly կայքեր՝ ժամանակակից տեխնոլոգիաներով։",

                contact:
                    "Կապվել ինձ հետ",

                projects:
                    "Տեսնել աշխատանքները",

                prices:
                    "Տեսնել գները"

            },


            services: {

                title:
                    "Ի՞նչ եմ պատրաստում",

                description:
                    "Կայքեր փոքր բիզնեսների, մասնագետների և անհատական նախագծերի համար։",

                cards: [

                    {
                        title: "Business Website",

                        text:
                            "Ժամանակակից կայք՝ ձեր բիզնեսը ինտերնետում ներկայացնելու համար։"
                    },

                    {
                        title: "Landing Page",

                        text:
                            "Մեկ էջանոց արագ և գեղեցիկ կայք ծառայության կամ ապրանքի համար։"
                    },

                    {
                        title: "Portfolio",

                        text:
                            "Անհատական portfolio՝ ձեր աշխատանքները ներկայացնելու համար։"
                    },

                    {
                        title: "Menu / Catalog",

                        text:
                            "Ապրանքների, ծառայությունների կամ մենյուի ժամանակակից կատալոգ։"
                    },

                    {
                        title: "Contact Website",

                        text:
                            "Պարզ և արագ կայք՝ ձեր բիզնեսի և կապի հիմնական տվյալներով։"
                    }

                ]

            },


            why: {

                title:
                    "Ինչու՞ ընտրել ինձ",

                description:
                    "Նպատակս պարզապես կայք ստեղծելը չէ։ Կայքը պետք է լինի արագ, գեղեցիկ, հասկանալի և հարմար օգտագործողի համար։",

                cards: [

                    {
                        title: "Մատչելի գներ",

                        text:
                            "Փոքր բիզնեսների համար առաջարկում եմ մատչելի և արդյունավետ լուծումներ։"
                    },

                    {
                        title: "Mobile-friendly",

                        text:
                            "Կայքը ճիշտ կաշխատի համակարգչով, պլանշետով և հեռախոսով։"
                    },

                    {
                        title: "Ժամանակակից դիզայն",

                        text:
                            "Մաքուր, ժամանակակից և պրոֆեսիոնալ տեսք։"
                    },

                    {
                        title: "Արագ աշխատանք",

                        text:
                            "Կայքը կառուցվում է թեթև և արագ աշխատող տեխնոլոգիաներով։"
                    },

                    {
                        title: "Անվտանգություն",

                        text:
                            "Կայքի կառուցման ժամանակ հաշվի են առնվում անվտանգության հիմնական կանոնները։"
                    },

                    {
                        title: "Հետագա թարմացումներ",

                        text:
                            "Կայքը հետագայում հնարավոր է զարգացնել և ավելացնել նոր հնարավորություններ։"
                    }

                ]

            },


            projects: {

                badge:
                    "Պորտֆոլիո",

                title:
                    "Իմ աշխատանքները",

                description:
                    "Կայքերի օրինակներ, որոնք ցույց են տալիս իմ աշխատանքի ոճն ու հնարավորությունները։",

                cards: [

                    {
                        previewLabel:
                            "BUSINESS",

                        previewTitle:
                            "Business Website",

                        previewText:
                            "Ժամանակակից բիզնես կայք",

                        previewButton:
                            "Տեսնել",

                        type:
                            "Business Website",

                        title:
                            "Փոքր բիզնեսի կայք",

                        text:
                            "Ժամանակակից և responsive կայք՝ ծառայությունները ներկայացնելու համար։",

                        link:
                            "Դիտել նախագիծը →"
                    },

                    {
                        previewLabel:
                            "PORTFOLIO",

                        previewTitle:
                            "Creative Portfolio",

                        previewText:
                            "Աշխատանքների ներկայացում",

                        previewButton:
                            "Դիտել",

                        type:
                            "Portfolio",

                        title:
                            "Անհատական Portfolio",

                        text:
                            "Մասնագետի աշխատանքները և ծառայությունները ներկայացնող կայք։",

                        link:
                            "Դիտել նախագիծը →"
                    },

                    {
                        previewLabel:
                            "MENU",

                        previewTitle:
                            "Restaurant Menu",

                        previewText:
                            "Թվային մենյու",

                        previewButton:
                            "Տեսնել մենյուն",

                        type:
                            "Menu / Catalog",

                        title:
                            "Digital Menu",

                        text:
                            "Հեռախոսների համար հարմարեցված թվային մենյու և կատալոգ։",

                        link:
                            "Դիտել նախագիծը →"
                    }

                ]

            },


            prices: {

                badge:
                    "Գներ",

                title:
                    "Գներ",

                description:
                    "Ընտրեք ձեր բիզնեսին համապատասխան տարբերակը։ Յուրաքանչյուր նախագիծ կարող է հարմարեցվել ձեր պահանջներին։",

                recommended:
                    "Առաջարկվող",

                cards: [

                    {
                        plan: "Starter",

                        title:
                            "Պարզ կայք",

                        description:
                            "Հարմար է անհատների և փոքր բիզնեսների համար։",

                        from:
                            "սկսած",

                        features: [
                            "✓ 1 էջանոց կայք",
                            "✓ Ժամանակակից դիզայն",
                            "✓ Mobile-friendly",
                            "✓ Contact information",
                            "✓ Արագ loading",
                            "✓ Basic SEO"
                        ],

                        button:
                            "Պատվիրել"
                    },

                    {
                        plan:
                            "Business",

                        title:
                            "Բիզնես կայք",

                        description:
                            "Ավելի ամբողջական լուծում՝ ձեր բիզնեսը ինտերնետում ներկայացնելու համար։",

                        from:
                            "սկսած",

                        features: [
                            "✓ Մինչև 5 էջ",
                            "✓ Responsive design",
                            "✓ Ծառայությունների բաժին",
                            "✓ Portfolio / Gallery",
                            "✓ Contact section",
                            "✓ SEO հիմունքներ",
                            "✓ Basic security setup",
                            "✓ Հետագա փոքր թարմացումներ"
                        ],

                        button:
                            "Ընտրել Business"
                    },

                    {
                        plan:
                            "Custom",

                        title:
                            "Անհատական նախագիծ",

                        description:
                            "Կայք՝ ձեր հատուկ պահանջներին համապատասխան։",

                        customPrice:
                            "Պայմանագրային",

                        features: [
                            "✓ Անհատական դիզայն",
                            "✓ Բազմաթիվ էջեր",
                            "✓ Custom functionality",
                            "✓ Forms",
                            "✓ API integration",
                            "✓ Backend-ի հնարավորություն",
                            "✓ Հետագա զարգացում"
                        ],

                        button:
                            "Քննարկել նախագիծը"
                    }

                ]

            },


            contact: {

                badge:
                    "Կապ",

                title:
                    "Եկեք քննարկենք ձեր կայքը",

                description:
                    "Ունե՞ք կայքի գաղափար կամ ցանկանում եք ներկայացնել ձեր բիզնեսը ինտերնետում։ Գրեք ինձ, և միասին կընտրենք ամենահարմար լուծումը։",

                infoTitle:
                    "Կապի տարբերակներ",

                intro:
                    "Կարող եք գրել Telegram-ով կամ WhatsApp-ով։ Email-ը կավելացվի շուտով։",

                whatsapp:
                    "Գրել WhatsApp-ով",

                whatsappMessage:
                    "Բարև, ցանկանում եմ քննարկել կայքի պատրաստման նախագիծ։",

                emailSoon:
                    "Կավելացվի շուտով",

                status:
                    "Բաց եմ նոր նախագծերի համար",

                labels: [
                    "Անուն",
                    "Email",
                    "Ինչպիսի՞ կայք է ձեզ պետք",
                    "Նկարագրեք նախագիծը"
                ],

                namePlaceholder:
                    "Ձեր անունը",

                emailPlaceholder:
                    "example@email.com",

                messagePlaceholder:
                    "Օրինակ՝ ինձ պետք է 3 էջանոց կայք իմ բիզնեսի համար...",

                options: [
                    "Ընտրեք տարբերակը",
                    "Landing Page",
                    "Business Website",
                    "Portfolio",
                    "Menu / Catalog",
                    "Custom Project"
                ],

                submit:
                    "Ուղարկել հաղորդագրությունը",

                demo:
                    "Demo նախագիծը շուտով կավելացվի"

            },


            top:
                "Վերև"

        },


        /* =====================================================
           ENGLISH
        ===================================================== */

        en: {

            pageTitle:
                "Web Service | Website Development",

            metaDescription:
                "Modern, fast and affordable websites for small businesses.",


            nav: [
                "Home",
                "Services",
                "Projects",
                "Prices",
                "Contact"
            ],


            hero: {

                badge:
                    "Smart Web Solutions",

                title:
                    "I create modern and fast websites at affordable prices",

                description:
                    "I build fast, beautiful, secure and mobile-friendly websites using modern technologies.",

                contact:
                    "Contact me",

                projects:
                    "View projects",

                prices:
                    "View prices"

            },


            services: {

                title:
                    "What I build",

                description:
                    "Websites for small businesses, professionals and individual projects.",

                cards: [

                    {
                        title:
                            "Business Website",

                        text:
                            "A modern website for presenting your business online."
                    },

                    {
                        title:
                            "Landing Page",

                        text:
                            "A fast and beautiful one-page website for a product or service."
                    },

                    {
                        title:
                            "Portfolio",

                        text:
                            "A personal portfolio for presenting your work and skills."
                    },

                    {
                        title:
                            "Menu / Catalog",

                        text:
                            "A modern catalog for products, services or digital menus."
                    },

                    {
                        title:
                            "Contact Website",

                        text:
                            "A simple and fast website with your business and contact information."
                    }

                ]

            },


            why: {

                title:
                    "Why choose me",

                description:
                    "My goal is not simply to build a website. It should be fast, attractive, clear and convenient for users.",

                cards: [

                    {
                        title:
                            "Affordable pricing",

                        text:
                            "Affordable and effective solutions for small businesses."
                    },

                    {
                        title:
                            "Mobile-friendly",

                        text:
                            "Your website will work properly on desktop, tablet and mobile."
                    },

                    {
                        title:
                            "Modern design",

                        text:
                            "A clean, modern and professional appearance."
                    },

                    {
                        title:
                            "Fast performance",

                        text:
                            "Websites are built using lightweight and fast technologies."
                    },

                    {
                        title:
                            "Security",

                        text:
                            "Basic security principles are considered during development."
                    },

                    {
                        title:
                            "Future updates",

                        text:
                            "Your website can later be expanded with new features."
                    }

                ]

            },


            projects: {

                badge:
                    "Portfolio",

                title:
                    "My work",

                description:
                    "Examples showing my design style and website development capabilities.",

                cards: [

                    {
                        previewLabel:
                            "BUSINESS",

                        previewTitle:
                            "Business Website",

                        previewText:
                            "Modern company website",

                        previewButton:
                            "Learn More",

                        type:
                            "Business Website",

                        title:
                            "Small Business Website",

                        text:
                            "A modern responsive website for presenting business services.",

                        link:
                            "View project →"
                    },

                    {
                        previewLabel:
                            "PORTFOLIO",

                        previewTitle:
                            "Creative Portfolio",

                        previewText:
                            "Personal work showcase",

                        previewButton:
                            "View Work",

                        type:
                            "Portfolio",

                        title:
                            "Personal Portfolio",

                        text:
                            "A clean website presenting a professional's work and services.",

                        link:
                            "View project →"
                    },

                    {
                        previewLabel:
                            "MENU",

                        previewTitle:
                            "Restaurant Menu",

                        previewText:
                            "Digital menu",

                        previewButton:
                            "View Menu",

                        type:
                            "Menu / Catalog",

                        title:
                            "Digital Menu",

                        text:
                            "A mobile-friendly digital menu and product catalog.",

                        link:
                            "View project →"
                    }

                ]

            },


            prices: {

                badge:
                    "Pricing",

                title:
                    "Prices",

                description:
                    "Choose the option that fits your business. Every project can be customized to your requirements.",

                recommended:
                    "Recommended",

                cards: [

                    {
                        plan:
                            "Starter",

                        title:
                            "Simple Website",

                        description:
                            "Suitable for individuals and small businesses.",

                        from:
                            "starting from",

                        features: [
                            "✓ 1-page website",
                            "✓ Modern design",
                            "✓ Mobile-friendly",
                            "✓ Contact information",
                            "✓ Fast loading",
                            "✓ Basic SEO"
                        ],

                        button:
                            "Order"
                    },

                    {
                        plan:
                            "Business",

                        title:
                            "Business Website",

                        description:
                            "A more complete solution for presenting your business online.",

                        from:
                            "starting from",

                        features: [
                            "✓ Up to 5 pages",
                            "✓ Responsive design",
                            "✓ Services section",
                            "✓ Portfolio / Gallery",
                            "✓ Contact section",
                            "✓ Basic SEO",
                            "✓ Basic security setup",
                            "✓ Small future updates"
                        ],

                        button:
                            "Choose Business"
                    },

                    {
                        plan:
                            "Custom",

                        title:
                            "Custom Project",

                        description:
                            "A website created specifically for your requirements.",

                        customPrice:
                            "Custom price",

                        features: [
                            "✓ Custom design",
                            "✓ Multiple pages",
                            "✓ Custom functionality",
                            "✓ Forms",
                            "✓ API integration",
                            "✓ Backend possibility",
                            "✓ Future development"
                        ],

                        button:
                            "Discuss project"
                    }

                ]

            },


            contact: {

                badge:
                    "Contact",

                title:
                    "Let's discuss your website",

                description:
                    "Have a website idea or want to present your business online? Send me a message and we will find the right solution.",

                infoTitle:
                    "Contact options",

                intro:
                    "You can contact me through Telegram or WhatsApp. Email will be available soon.",

                whatsapp:
                    "Write on WhatsApp",

                whatsappMessage:
                    "Hello, I would like to discuss a website project.",

                emailSoon:
                    "Coming soon",

                status:
                    "Available for new projects",

                labels: [
                    "Name",
                    "Email",
                    "What type of website do you need?",
                    "Describe your project"
                ],

                namePlaceholder:
                    "Your name",

                emailPlaceholder:
                    "example@email.com",

                messagePlaceholder:
                    "For example: I need a 3-page website for my business...",

                options: [
                    "Choose an option",
                    "Landing Page",
                    "Business Website",
                    "Portfolio",
                    "Menu / Catalog",
                    "Custom Project"
                ],

                submit:
                    "Send message",

                demo:
                    "Demo project will be available soon"

            },


            top:
                "Top"

        },


        /* =====================================================
           RUSSIAN
        ===================================================== */

        ru: {

            pageTitle:
                "Web Service | Создание сайтов",

            metaDescription:
                "Современные, быстрые и доступные сайты для малого бизнеса.",


            nav: [
                "Главная",
                "Услуги",
                "Работы",
                "Цены",
                "Контакты"
            ],


            hero: {

                badge:
                    "Умные веб-решения",

                title:
                    "Создаю современные и быстрые сайты по доступным ценам",

                description:
                    "Создаю быстрые, красивые, безопасные и адаптивные сайты с использованием современных технологий.",

                contact:
                    "Связаться со мной",

                projects:
                    "Посмотреть работы",

                prices:
                    "Смотреть цены"

            },


            services: {

                title:
                    "Что я создаю",

                description:
                    "Сайты для малого бизнеса, специалистов и индивидуальных проектов.",

                cards: [

                    {
                        title:
                            "Business Website",

                        text:
                            "Современный сайт для представления вашего бизнеса в интернете."
                    },

                    {
                        title:
                            "Landing Page",

                        text:
                            "Быстрый и красивый одностраничный сайт для продукта или услуги."
                    },

                    {
                        title:
                            "Portfolio",

                        text:
                            "Персональное портфолио для демонстрации ваших работ."
                    },

                    {
                        title:
                            "Menu / Catalog",

                        text:
                            "Современный каталог товаров, услуг или цифрового меню."
                    },

                    {
                        title:
                            "Contact Website",

                        text:
                            "Простой и быстрый сайт с информацией о бизнесе и контактами."
                    }

                ]

            },


            why: {

                title:
                    "Почему выбрать меня",

                description:
                    "Моя цель — не просто создать сайт. Он должен быть быстрым, красивым, понятным и удобным для пользователя.",

                cards: [

                    {
                        title:
                            "Доступные цены",

                        text:
                            "Эффективные и доступные решения для малого бизнеса."
                    },

                    {
                        title:
                            "Mobile-friendly",

                        text:
                            "Сайт будет корректно работать на компьютере, планшете и телефоне."
                    },

                    {
                        title:
                            "Современный дизайн",

                        text:
                            "Чистый, современный и профессиональный внешний вид."
                    },

                    {
                        title:
                            "Высокая скорость",

                        text:
                            "Сайт создаётся с использованием лёгких и быстрых технологий."
                    },

                    {
                        title:
                            "Безопасность",

                        text:
                            "При разработке учитываются основные принципы безопасности."
                    },

                    {
                        title:
                            "Дальнейшие обновления",

                        text:
                            "Сайт можно развивать и добавлять новые возможности."
                    }

                ]

            },


            projects: {

                badge:
                    "Портфолио",

                title:
                    "Мои работы",

                description:
                    "Примеры сайтов, показывающие мой стиль и возможности разработки.",

                cards: [

                    {
                        previewLabel:
                            "BUSINESS",

                        previewTitle:
                            "Business Website",

                        previewText:
                            "Современный сайт компании",

                        previewButton:
                            "Подробнее",

                        type:
                            "Business Website",

                        title:
                            "Сайт для малого бизнеса",

                        text:
                            "Современный адаптивный сайт для представления услуг бизнеса.",

                        link:
                            "Посмотреть проект →"
                    },

                    {
                        previewLabel:
                            "PORTFOLIO",

                        previewTitle:
                            "Creative Portfolio",

                        previewText:
                            "Демонстрация работ",

                        previewButton:
                            "Смотреть",

                        type:
                            "Portfolio",

                        title:
                            "Персональное портфолио",

                        text:
                            "Чистый сайт для представления работ и услуг специалиста.",

                        link:
                            "Посмотреть проект →"
                    },

                    {
                        previewLabel:
                            "MENU",

                        previewTitle:
                            "Restaurant Menu",

                        previewText:
                            "Цифровое меню",

                        previewButton:
                            "Открыть меню",

                        type:
                            "Menu / Catalog",

                        title:
                            "Digital Menu",

                        text:
                            "Цифровое меню и каталог, адаптированные для мобильных устройств.",

                        link:
                            "Посмотреть проект →"
                    }

                ]

            },


            prices: {

                badge:
                    "Цены",

                title:
                    "Цены",

                description:
                    "Выберите вариант, подходящий вашему бизнесу. Каждый проект можно адаптировать под ваши требования.",

                recommended:
                    "Рекомендуем",

                cards: [

                    {
                        plan:
                            "Starter",

                        title:
                            "Простой сайт",

                        description:
                            "Подходит для частных специалистов и малого бизнеса.",

                        from:
                            "от",

                        features: [
                            "✓ 1 страница",
                            "✓ Современный дизайн",
                            "✓ Mobile-friendly",
                            "✓ Контактная информация",
                            "✓ Быстрая загрузка",
                            "✓ Basic SEO"
                        ],

                        button:
                            "Заказать"
                    },

                    {
                        plan:
                            "Business",

                        title:
                            "Бизнес-сайт",

                        description:
                            "Более полное решение для представления вашего бизнеса.",

                        from:
                            "от",

                        features: [
                            "✓ До 5 страниц",
                            "✓ Responsive design",
                            "✓ Раздел услуг",
                            "✓ Portfolio / Gallery",
                            "✓ Контактный раздел",
                            "✓ Основы SEO",
                            "✓ Basic security setup",
                            "✓ Небольшие дальнейшие обновления"
                        ],

                        button:
                            "Выбрать Business"
                    },

                    {
                        plan:
                            "Custom",

                        title:
                            "Индивидуальный проект",

                        description:
                            "Сайт под ваши специальные требования.",

                        customPrice:
                            "По договорённости",

                        features: [
                            "✓ Индивидуальный дизайн",
                            "✓ Несколько страниц",
                            "✓ Custom functionality",
                            "✓ Формы",
                            "✓ API integration",
                            "✓ Возможность backend",
                            "✓ Дальнейшее развитие"
                        ],

                        button:
                            "Обсудить проект"
                    }

                ]

            },


            contact: {

                badge:
                    "Контакты",

                title:
                    "Давайте обсудим ваш сайт",

                description:
                    "Есть идея сайта или хотите представить свой бизнес в интернете? Напишите мне, и мы подберём подходящее решение.",

                infoTitle:
                    "Способы связи",

                intro:
                    "Вы можете написать мне в Telegram или WhatsApp. Email будет добавлен позже.",

                whatsapp:
                    "Написать в WhatsApp",

                whatsappMessage:
                    "Здравствуйте, я хотел бы обсудить создание сайта.",

                emailSoon:
                    "Скоро",

                status:
                    "Открыт для новых проектов",

                labels: [
                    "Имя",
                    "Email",
                    "Какой сайт вам нужен?",
                    "Опишите проект"
                ],

                namePlaceholder:
                    "Ваше имя",

                emailPlaceholder:
                    "example@email.com",

                messagePlaceholder:
                    "Например: мне нужен сайт из 3 страниц для моего бизнеса...",

                options: [
                    "Выберите вариант",
                    "Landing Page",
                    "Business Website",
                    "Portfolio",
                    "Menu / Catalog",
                    "Custom Project"
                ],

                submit:
                    "Отправить сообщение",

                demo:
                    "Демо-проект скоро будет доступен"

            },


            top:
                "Наверх"

        }

    };


    /* =========================================================
       04. CURRENT LANGUAGE
    ========================================================= */

    let currentLanguage =
        localStorage.getItem("site-language");


    if (!translations[currentLanguage]) {

        currentLanguage =
            DEFAULT_LANGUAGE;

    }


    /* =========================================================
       05. CHANGE LANGUAGE
    ========================================================= */

    function changeLanguage(language) {

        const t =
            translations[language];


        if (!t) {
            return;
        }


        currentLanguage =
            language;


        /* PAGE */

        document.documentElement.lang =
            language;


        document.title =
            t.pageTitle;


        const metaDescription =
            $('meta[name="description"]');


        if (metaDescription) {

            metaDescription.content =
                t.metaDescription;

        }


        /* =====================================================
           NAV
        ===================================================== */

        setTexts(
            "nav ul a",
            t.nav
        );


        /* =====================================================
           HERO
        ===================================================== */

        setText(
            ".hero-badge",
            t.hero.badge
        );


        setText(
            ".hero-text h1",
            t.hero.title
        );


        setText(
            ".hero-text p",
            t.hero.description
        );


        setText(
            ".primary-button",
            t.hero.contact
        );


        setText(
            ".secondary-button",
            t.hero.projects
        );


        setText(
            ".bonus-button",
            t.hero.prices
        );


        /* =====================================================
           SERVICES
        ===================================================== */

        setText(
            "#services h2",
            t.services.title
        );


        setText(
            "#services .section-description",
            t.services.description
        );


        $$(".service-card")
            .forEach((card, index) => {

                const data =
                    t.services.cards[index];


                if (!data) {
                    return;
                }


                setText(
                    "h3",
                    data.title,
                    card
                );


                setText(
                    "p",
                    data.text,
                    card
                );

            });


        /* =====================================================
           WHY ME
        ===================================================== */

        setText(
            "#why-me h2",
            t.why.title
        );


        setText(
            "#why-me .section-description",
            t.why.description
        );


        $$(".advantage-card")
            .forEach((card, index) => {

                const data =
                    t.why.cards[index];


                if (!data) {
                    return;
                }


                setText(
                    "h3",
                    data.title,
                    card
                );


                setText(
                    "p",
                    data.text,
                    card
                );

            });


        /* =====================================================
           PROJECTS
        ===================================================== */

        setText(
            "#projects .section-badge",
            t.projects.badge
        );


        setText(
            "#projects h2",
            t.projects.title
        );


        setText(
            "#projects .section-description",
            t.projects.description
        );


        $$(".project-card")
            .forEach((card, index) => {

                const data =
                    t.projects.cards[index];


                if (!data) {
                    return;
                }


                setText(
                    ".preview-label",
                    data.previewLabel,
                    card
                );


                setText(
                    ".project-preview h3",
                    data.previewTitle,
                    card
                );


                setText(
                    ".project-preview p",
                    data.previewText,
                    card
                );


                setText(
                    ".fake-button",
                    data.previewButton,
                    card
                );


                setText(
                    ".project-type",
                    data.type,
                    card
                );


                setText(
                    ".project-info h3",
                    data.title,
                    card
                );


                setText(
                    ".project-info p",
                    data.text,
                    card
                );


                setText(
                    ".project-link",
                    data.link,
                    card
                );

            });


        /* =====================================================
           PRICES
        ===================================================== */

        setText(
            "#prices .section-badge",
            t.prices.badge
        );


        setText(
            "#prices h2",
            t.prices.title
        );


        setText(
            "#prices .section-description",
            t.prices.description
        );


        setText(
            ".recommended-badge",
            t.prices.recommended
        );


        $$(".price-card")
            .forEach((card, index) => {

                const data =
                    t.prices.cards[index];


                if (!data) {
                    return;
                }


                setText(
                    ".price-plan",
                    data.plan,
                    card
                );


                setText(
                    ".price-card-top h3",
                    data.title,
                    card
                );


                setText(
                    ".price-card-top p",
                    data.description,
                    card
                );


                const from =
                    $(".price-from", card);


                if (
                    from &&
                    data.from
                ) {

                    from.textContent =
                        data.from;

                }


                /*
                    Starter և Business-ի գումարները
                    չենք փոխում։

                    Custom-ի text-ը փոխում ենք։
                */

                if (
                    index === 2 &&
                    data.customPrice
                ) {

                    setText(
                        ".price strong",
                        data.customPrice,
                        card
                    );

                }


                setTexts(
                    ".price-features li",
                    data.features,
                    card
                );


                setText(
                    ".price-button",
                    data.button,
                    card
                );

            });


        /* =====================================================
           CONTACT
        ===================================================== */

        setText(
            "#contact .section-badge",
            t.contact.badge
        );


        setText(
            "#contact h2",
            t.contact.title
        );


        setText(
            "#contact .section-description",
            t.contact.description
        );


        setText(
            ".contact-info h3",
            t.contact.infoTitle
        );


        setText(
            ".contact-intro",
            t.contact.intro
        );


        /* =====================================================
           WHATSAPP
        ===================================================== */

        const whatsappLink =
            $('a[href^="https://wa.me/"]');


        if (whatsappLink) {

            const whatsappText =
                $("strong", whatsappLink);


            if (whatsappText) {

                whatsappText.textContent =
                    t.contact.whatsapp;

            }


            const encodedMessage =
                encodeURIComponent(
                    t.contact.whatsappMessage
                );


            whatsappLink.href =
                `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;

        }


        /* =====================================================
           EMAIL
        ===================================================== */

        /*
            Email-ը ներկայում link չէ,
            դրա համար գտնում ենք contact-method div-ը։
        */

        const nonLinkMethods =
            $$("#contact .contact-method:not(a)");


        if (nonLinkMethods.length) {

            const emailStrong =
                $("strong", nonLinkMethods[0]);


            if (emailStrong) {

                emailStrong.textContent =
                    t.contact.emailSoon;

            }

        }


        /* =====================================================
           STATUS
        ===================================================== */

        const status =
            $(".contact-status");


        if (status) {

            status.innerHTML = "";


            const dot =
                document.createElement(
                    "span"
                );


            status.appendChild(dot);


            status.appendChild(
                document.createTextNode(
                    ` ${t.contact.status}`
                )
            );

        }


        /* =====================================================
           FORM LABELS
        ===================================================== */

        setTexts(
            "#contact .form-group label",
            t.contact.labels
        );


        /* INPUTS */

        const nameInput =
            $("#name");


        const emailInput =
            $("#email");


        const messageInput =
            $("#message");


        if (nameInput) {

            nameInput.placeholder =
                t.contact.namePlaceholder;

        }


        if (emailInput) {

            emailInput.placeholder =
                t.contact.emailPlaceholder;

        }


        if (messageInput) {

            messageInput.placeholder =
                t.contact.messagePlaceholder;

        }


        /* SELECT */

        const serviceSelect =
            $("#service");


        if (serviceSelect) {

            const options =
                $$(
                    "option",
                    serviceSelect
                );


            options.forEach(
                (option, index) => {

                    if (
                        t.contact.options[index]
                        !== undefined
                    ) {

                        option.textContent =
                            t.contact.options[index];

                    }

                }
            );

        }


        /* SUBMIT */

        setText(
            ".contact-submit",
            t.contact.submit
        );


        /* =====================================================
           LANGUAGE BUTTON ACTIVE STATE
        ===================================================== */

        $$(".language-btn")
            .forEach(button => {

                const isActive =
                    button.dataset.lang ===
                    language;


                button.classList.toggle(
                    "active",
                    isActive
                );


                button.setAttribute(
                    "aria-pressed",
                    String(isActive)
                );

            });


        /* BACK TO TOP TRANSLATION */

        const backToTop =
            $(".back-to-top");


        if (backToTop) {

            backToTop.setAttribute(
                "aria-label",
                t.top
            );


            backToTop.setAttribute(
                "title",
                t.top
            );

        }


        /* SAVE */

        localStorage.setItem(
            "site-language",
            language
        );

    }


    /* =========================================================
       06. LANGUAGE BUTTONS
    ========================================================= */

    $$(".language-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    changeLanguage(
                        button.dataset.lang
                    );

                }
            );

        });


    /* =========================================================
       07. BONUS CSS FROM JS
    ========================================================= */




    /* =========================================================
       08. INITIAL LANGUAGE
    ========================================================= */

    changeLanguage(
        currentLanguage
    );


    /* =========================================================
       09. PARALLAX
    ========================================================= */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    const finePointer =
        window.matchMedia(
            "(pointer: fine)"
        ).matches;


    function addParallax(
        section,
        xVariable,
        yVariable,
        strength
    ) {

        if (
            !section ||
            reducedMotion ||
            !finePointer
        ) {

            return;

        }


        section.addEventListener(
            "pointermove",
            event => {

                const rect =
                    section.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width -
                    0.5;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height -
                    0.5;


                section.style.setProperty(
                    xVariable,
                    `${x * strength}px`
                );


                section.style.setProperty(
                    yVariable,
                    `${y * strength}px`
                );

            }
        );


        section.addEventListener(
            "pointerleave",
            () => {

                section.style.setProperty(
                    xVariable,
                    "0px"
                );


                section.style.setProperty(
                    yVariable,
                    "0px"
                );

            }
        );

    }


    addParallax(
        $("#home"),
        "--hero-move-x",
        "--hero-move-y",
        16
    );


    addParallax(
        $("#prices"),
        "--prices-x",
        "--prices-y",
        9
    );


    addParallax(
        $("#contact"),
        "--contact-move-x",
        "--contact-move-y",
        10
    );


    /* =========================================================
       10. SCROLL REVEAL
    ========================================================= */

    const revealElements =
        $$(
            ".service-card," +
            ".advantage-card," +
            ".project-card," +
            ".price-card," +
            ".contact-info," +
            ".contact-form-wrapper"
        );


    if (
        "IntersectionObserver" in window &&
        !reducedMotion
    ) {

        revealElements.forEach(
            element => {

                element.classList.add(
                    "reveal-item"
                );

            }
        );


        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList.add(
                                        "is-visible"
                                    );


                                revealObserver
                                    .unobserve(
                                        entry.target
                                    );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            element => {

                revealObserver.observe(
                    element
                );

            }
        );

    }


    /* =========================================================
       11. BONUS — ACTIVE NAVBAR
    ========================================================= */

    const navLinks =
        $$("nav ul a");


    const navSections =
        navLinks
            .map(link => {

                const selector =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !selector ||
                    !selector.startsWith("#")
                ) {

                    return null;

                }


                return $(
                    selector
                );

            })
            .filter(Boolean);


    function updateActiveNav() {

        const position =
            window.scrollY + 180;


        let currentSection =
            navSections[0]?.id ||
            "home";


        navSections.forEach(section => {

            if (
                position >=
                section.offsetTop
            ) {

                currentSection =
                    section.id;

            }

        });


        navLinks.forEach(link => {

            link.classList.toggle(
                "nav-current",
                link.getAttribute("href") ===
                `#${currentSection}`
            );

        });

    }


    updateActiveNav();


    window.addEventListener(
        "scroll",
        updateActiveNav,
        {
            passive: true
        }
    );


    /* =========================================================
       12. BONUS — SCROLL PROGRESS
    ========================================================= */

    const progressBar =
        document.createElement(
            "div"
        );


    progressBar.className =
        "site-scroll-progress";


    progressBar.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.appendChild(
        progressBar
    );


    function updateProgress() {

        const maxScroll =
            document.documentElement
                .scrollHeight -
            window.innerHeight;


        if (maxScroll <= 0) {

            progressBar.style.width =
                "0%";

            return;

        }


        const percent =
            (
                window.scrollY /
                maxScroll
            ) *
            100;


        progressBar.style.width =
            `${Math.min(
                100,
                Math.max(
                    0,
                    percent
                )
            )}%`;

    }


    updateProgress();


    window.addEventListener(
        "scroll",
        updateProgress,
        {
            passive: true
        }
    );


    /* =========================================================
       13. BONUS — TOAST
    ========================================================= */

    const toast =
        document.createElement(
            "div"
        );


    toast.className =
        "js-toast";


    document.body.appendChild(
        toast
    );


    let toastTimer;


    function showToast(message) {

        clearTimeout(
            toastTimer
        );


        toast.textContent =
            message;


        toast.classList.add(
            "show"
        );


        toastTimer =
            setTimeout(
                () => {

                    toast.classList.remove(
                        "show"
                    );

                },
                2500
            );

    }


    /* =========================================================
       14. PROJECT PLACEHOLDER
    ========================================================= */

    $$(".project-link")
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const href =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !href ||
                        href === "#"
                    ) {

                        event.preventDefault();


                        showToast(
                            translations[
                                currentLanguage
                            ].contact.demo
                        );

                    }

                }
            );

        });


    /* =========================================================
       15. BONUS — LIVE PRICES TERMINAL
    ========================================================= */

    const terminalLines =
        $$(".prices-code-screen span");


    const terminalSets = [

        [
            'const project = "website";',
            "design.initialize();",
            "security.check();",
            "performance.optimize();",
            "deploy.production();"
        ],

        [
            "request.accepted();",
            "layout.build();",
            "responsive.test();",
            "seo.optimize();",
            "status = ONLINE;"
        ],

        [
            "client.idea();",
            "prototype.create();",
            "frontend.build();",
            "quality.check();",
            "project.ready();"
        ],

        [
            "connection.secure();",
            "assets.optimize();",
            "interface.render();",
            "system.ready();",
            "launch.website();"
        ]

    ];


    let terminalIndex = 0;


    if (
        terminalLines.length &&
        !reducedMotion
    ) {

        setInterval(
            () => {

                terminalIndex =
                    (
                        terminalIndex + 1
                    ) %
                    terminalSets.length;


                const current =
                    terminalSets[
                        terminalIndex
                    ];


                terminalLines.forEach(
                    (line, index) => {

                        if (
                            current[index]
                            !== undefined
                        ) {

                            line.textContent =
                                current[index];

                        }

                    }
                );

            },
            6000
        );

    }


    /* =========================================================
       16. BONUS — PRICE BUTTON → CONTACT
    ========================================================= */

    const priceCards =
        $$(".price-card");


    const serviceSelect =
        $("#service");


    const serviceByPrice = [
        "landing",
        "business",
        "custom"
    ];


    priceCards.forEach(
        (card, index) => {

            const button =
                $(".price-button", card);


            if (!button) {
                return;
            }


            button.addEventListener(
                "click",
                () => {

                    if (
                        serviceSelect &&
                        serviceByPrice[index]
                    ) {

                        serviceSelect.value =
                            serviceByPrice[index];

                    }


                    /*
                        Contact form հասնելուց հետո
                        Name input-ին փոքր focus
                    */

                    setTimeout(
                        () => {

                            const name =
                                $("#name");


                            if (name) {

                                name.focus({
                                    preventScroll: true
                                });

                            }

                        },
                        650
                    );

                }
            );

        }
    );


    /* =========================================================
       17. BONUS — BACK TO TOP
    ========================================================= */

    const backToTop =
        document.createElement(
            "button"
        );


    backToTop.type =
        "button";


    backToTop.className =
        "back-to-top";


    backToTop.innerHTML =
        "↑";


    document.body.appendChild(
        backToTop
    );


    function updateBackToTop() {

        backToTop.classList.toggle(
            "visible",
            window.scrollY > 650
        );

    }


    updateBackToTop();


    window.addEventListener(
        "scroll",
        updateBackToTop,
        {
            passive: true
        }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior:
                    reducedMotion
                        ? "auto"
                        : "smooth"

            });

        }
    );


    /*
        Back-to-top-ը ստեղծեցինք
        changeLanguage()-ից հետո,
        դրա համար հիմա տալիս ենք title-ը։
    */

    backToTop.setAttribute(
        "title",
        translations[
            currentLanguage
        ].top
    );


    backToTop.setAttribute(
        "aria-label",
        translations[
            currentLanguage
        ].top
    );


    /* =========================================================
       18. BONUS — SMOOTH INTERNAL LINKS
    ========================================================= */

    $$('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        $(targetId);


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({

                        behavior:
                            reducedMotion
                                ? "auto"
                                : "smooth",

                        block:
                            "start"

                    });

                }
            );

        });

});