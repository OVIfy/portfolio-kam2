// import type { APIRoute } from 'astro';

// // interface ContactMsg {
// //     name : string
// //     email : string
// //     message : string
// // }

// export const GET : APIRoute = async ({ params, request}) => {
//     return new Response(JSON.stringify({
//             message: "This was a GET!"
//         })
//     )
// }

// export const POST : APIRoute = async ({ params, request, redirect, locals}) => {

//     if(request.headers.get('Content-Type') == 'application/x-www-form-urlencoded'){
//         const body = await request.formData();
//         let senderName = body.get('name')
//         let senderEmail = body.get('email')
//         let senderMessage = body.get('message')

//         console.log(senderName, senderEmail, senderMessage)
//     }

//     // return new Response(JSON.stringify({
//     //         message: "This was a POST!"
//     //     })
//     // )
//    return redirect('/#contact', 303)
// }