type slide = {
    src : string
}

type SlideParent = {
    title : string,
    base : string[],
    slides : slide[],
    link : string[]
}

const slides : SlideParent[] = [
    {
        title : 'Pencil Hoops <br> with <span class="text-my-red">NBA</span> & <span class="text-my-red">ESPN</span>',
        base : ['UI/UX Design <br> Interaction Design', 'Concept, Basketball <br> March, 2023'],
        slides : [
            {"src" : "images/slides/nba/1.png"},
            {"src" : "images/slides/nba/2.jpg"},
            {"src" : "images/slides/nba/3.png"},
            {"src" : "images/slides/nba/4.png"},
            {"src" : "images/slides/nba/5.png"},
            {"src" : "images/slides/nba/6.png"},
        ],
        link : ["/pencil", "https://pencil-hoops.netlify.app/"]
    },
    {
        title : 'Horror Vault <br> with <span class="text-my-green">Spotify</span>',
        base : ['UI/UX Design <br> Interaction Design', 'Concept, Horror <br> Febuary, 2023'],
        slides : [
            {"src" : "images/slides/horror/1.png"},
            {"src" : "images/slides/horror/2.png"},
            {"src" : "images/slides/horror/3.png"},
            {"src" : "images/slides/horror/4.png"},
            {"src" : "images/slides/horror/5.png"},
            {"src" : "images/slides/horror/6.png"},
            {"src" : "images/slides/horror/7.png"},
            {"src" : "images/slides/horror/8.png"},

        ],
        link : ["/horror", "https://horror-vault.netlify.app/"]
    },
    {
        title : 'Crack VR <br> with <span class="text-my-blue">Chelsea FC</span>',
        base : ['UX/Product Design', 'Sports, Virtual Reality, Luxury <br> June, 2022'],
        slides : [
            {"src" : "images/slides/chelsea/1.png"},
            {"src" : "images/slides/chelsea/2.png"},
            {"src" : "images/slides/chelsea/3.png"},
            {"src" : "images/slides/chelsea/4.png"},
            {"src" : "images/slides/chelsea/5.png"},
        ],
        link : ["/chelsea"]
    },
    {
        title : 'Crack Headphones',
        base : ['UX/Product Design', 'Sound, Travel, Luxury <br> July, 2021'],
        slides : [
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843997/17_sflxfb.jpg"},
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843997/19_emqu3r.jpg"},
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843998/18_iisbf0.jpg"},
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843998/20_t4af8r.jpg"},
        ],
        link : ["/headphones"]
    },
]


export default slides