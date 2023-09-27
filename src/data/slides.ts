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
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843995/6_jyrari.jpg"},
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843992/2_t5kibk.jpg"},
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843992/3_jhkmub.jpg"},
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843992/2_t5kibk.jpg"},
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843993/4_yowpyf.jpg"},
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843992/3_jhkmub.jpg"},
        ],
        link : ["/pencil", "https://pencil-hoops.netlify.app/"]
    },
    {
        title : 'Horror Vault <br> with <span class="text-my-green">Spotify</span>',
        base : ['UI/UX Design <br> Interaction Design', 'Concept, Horror <br> Febuary, 2023'],
        slides : [
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843998/9_mi9pix.jpg"},
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843994/7_k7qjcz.jpg"},
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843998/9_mi9pix.jpg"},
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843995/8_vlzewn.jpg"},
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843994/11_oae33s.jpg"},
        ],
        link : ["/horror", "https://horror-vault.netlify.app/"]
    },
    {
        title : 'Crack VR <br> with <span class="text-my-blue">Chelsea FC</span>',
        base : ['UX/Product Design', 'Sports, Virtual Reality, Luxury <br> June, 2022'],
        slides : [
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843995/14_ciiev2.jpg"},
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843996/15_wl1rjn.jpg"},
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843995/14_ciiev2.jpg"},
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843993/13_uc9p0z.jpg"},
            {"src" : "https://res.cloudinary.com/di1hpsxqe/image/upload/v1695843995/14_ciiev2.jpg"},
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