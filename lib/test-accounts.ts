import bean from "@/assets/dogs/bean.jpg"
import ernie from "@/assets/dogs/ernie.jpg"
import trevor from "@/assets/dogs/trevor.jpg"
import webster from "@/assets/dogs/webster.jpg"
import longfellow from "@/assets/dogs/longfellow.jpg"
import tucker from "@assets/dogs/tucker.jpg"
import woofie from "@assets/dogs/woofie.jpg"

export const testUsers =
    [
        {
            id: "001", title: "Bean Bop", short: "guitarist, songwriter, band leader", long: "", avatar: bean, type: "user", username: "beanthedingo", password: "bean", email: "beanthedingo@wimblapp.com", firstname: "Bean", lastname: "Bop",
            membership: [
                //Red Healer, Howl and Forever
            ]
        },
        {
            id: "002", title: "Ernest Stull", short: "bassist in a few bands", long: "", avatar: ernie, type: "user", username: "ernieplaysbass", password: "bean", email: "ernieplaysbass@wimblapp.com", firstname: "Ernie", lastname: "Stull",
            membership: [
                //Red Healer
            ]
        },
        {
            id: "003", title: "Tucker Castle", short: "Hairy Growler owner", long: "", avatar: tucker, type: "user", username: "howlermusic420", password: "bean", email: "howlermusic420@wimblapp.com", firstname: "Tucker", lastname: "Castle",
            membership: [
                //Hairy Growler
            ]
        },
        {
            id: "004", title: "Longfellow Beaker", short: "guitarist, songwriter, band leader", long: "", avatar: longfellow, type: "user", username: "beaklong", password: "bean", email: "beaklong@wimblapp.com", firstname: "Longfellow", lastname: "Beaker",
            membership: [
                //Longbois, Hairy Growler
            ]
        },
        {
            id: "005", title: "Trevor Loughton", short: "CEO, talent buyer", long: "", avatar: trevor, type: "user", username: "loughtonlockedin", password: "bean", email: "loughtonlockedin@wimblapp.com", firstname: "Trevor", lastname: "Loughton",
            membership: [
                //Top Dog Entertainment
            ]
        },
        {
            id: "006", title: "Webster Naut", short: "leader of wedding band", long: "", avatar: webster, type: "user", username: "webbieknots", password: "bean", email: "webbieknots@wimblapp.com", firstname: "Webster", lastname: "Naut",
            membership: [
                //Howl and Forever
            ]
        },
        {
            id: "007", title: "Woofie Jones", short: "jazz singer, band leader", long: "", avatar: woofie, type: "user", username: "woofiej1213", password: "bean", email: "woofiej1213@wimblapp.com", firstname: "Woofie", lastname: "Jones",
            membership: [
                //Bark Twice
            ]
        },
    ];

export const testGroups =
    [
        {
            id: "100", title: "Red Healer", short: "", long: "", avatar: "", type: "band", admin: "",
            membership: [
                //Bean, Ernie
            ]
        },
        {
            id: "101", title: "Red Healer Trio", short: "", long: "", avatar: "", type: "band", admin: "",
            membership: [
                //Bean, Ernie
            ]
        },
        {
            id: "102", title: "Forever Together", short: "", long: "", avatar: "", type: "band", admin: "",
            membership: [
                //Bean, -Ian-
            ]
        },
        {
            id: "103", title: "Howler", short: "", long: "", avatar: "", type: "venue", admin: "",
            membership: [
                //Joel, Ethan
            ]
        },
        {
            id: "104", title: "Top Dog Entertainment", short: "", long: "", avatar: "", type: "agency", admin: "Trevor Loughton",
            membership: [
                //Bean, -Paul-
            ]
        },
    ];