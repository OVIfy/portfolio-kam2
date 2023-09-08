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
            {"src" : "/images/slides/1.jpg"},
            {"src" : "/images/slides/2.jpg"},
            {"src" : "/images/slides/3.jpg"},
            {"src" : "/images/slides/4.jpg"},
            {"src" : "/images/slides/5.jpg"},
            {"src" : "/images/slides/6.jpg"},
        ],
        link : ["/pencil", "https://pencil-hoops.netlify.app/"]
    },
    {
        title : 'Horror Vault <br> with <span class="text-my-green">Spotify</span>',
        base : ['UI/UX Design <br> Interaction Design', 'Concept, Basketball <br> March, 2023'],
        slides : [
            {"src" : "/images/slides/7.jpg"},
            {"src" : "/images/slides/8.jpg"},
            {"src" : "/images/slides/9.jpg"},
            {"src" : "/images/slides/10.jpg"},
            {"src" : "/images/slides/11.jpg"},
        ],
        link : ["/horror", "https://horror-vault.netlify.app/"]
    },
    {
        title : 'Crack VR <br> with <span class="text-my-blue">Chelsea FC</span>',
        base : ['UI/UX Design <br> Interaction Design', 'Concept, Basketball <br> March, 2023'],
        slides : [
            {"src" : "/images/slides/12.jpg"},
            {"src" : "/images/slides/13.jpg"},
            {"src" : "/images/slides/14.jpg"},
            {"src" : "/images/slides/15.jpg"},
            {"src" : "/images/slides/16.jpg"},
        ],
        link : ["/chelsea"]
    },
    {
        title : 'Crack Headphones',
        base : ['UI/UX Design <br> Interaction Design', 'Concept, Basketball <br> March, 2023'],
        slides : [
            {"src" : "/images/slides/17.jpg"},
            {"src" : "/images/slides/18.jpg"},
            {"src" : "/images/slides/19.jpg"},
            {"src" : "/images/slides/20.jpg"},
        ],
        link : ["/headphones"]
    },
]


export default slides