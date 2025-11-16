//By HaroldMendoza "LevelUp"



let handler = async (m, { conn, text}) => {

let hasil = Math.floor(Math.random() * 5000)

  m.reply(`
*┏━_͜͡-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡⚘-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡⚘-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡⚘-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡_͜͡━┓*\n
❥ *"${pickRandom(global.piropo)}"*\n\n\t- By おDaniel
\n*┗━_͜͡-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡⚘-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡⚘-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡⚘-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡_͜͡━┛*
`)
}
handler.tags = ['fun']
handler.command = handler.help = ['piropo']

//handler.limit = 1
handler.register = true 
handler.fail = null
handler.exp = 0

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return minutes + " m " + seconds + " s " 
}


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.piropo = ["Si tu cuerpo fuera cárcel y tus labios cadena, qué bonito lugar para pasar mi condena.", "!Lo tuyo es un dos por uno, además de guapa eres simpática!", "Fíjate como es la ciencia que ahora hasta hacen bombones que andan.", "Por la luna daría un beso, daría todo por el sol, pero por la luz de tu mirada, doy mi vida y corazón.", "Si yo fuera un avión y tu un aeropuerto, me la pasaría aterrizando por tu hermoso cuerpo.", "Tantas estrellas en el espacio y ninguna brilla como tú.", "Me gusta el café, pero prefiero tener-té.", "No eres Google, pero tienes todo lo que yo busco.", "Mis ganas de ti no se quitan, se acumulan.",  "Te regalo esta flor, aunque ninguna será jamás tan bella como tú.", "Cuando te multen por exceso de belleza, yo pagaré tu fianza.", "Si cada gota de agua sobre tu cuerpo es un beso, entonces quiero convertirme en aguacero.", "Estás como para invitarte a dormir, y no dormir.", "Si tu cuerpo fuera cárcel y tus brazos cadenas, ese sería el lugar perfecto para cumplir condena.",  " Cómo podría querer irme a dormir si estás tú al otro lado de la pantalla?", "Quisiera ser hormiguita para subir por tu balcón y decirte al oído: guapa, bonita, bombón.", "En mi vida falta vida, en mi vida falta luz, en mi vida falta alguien y ese alguien eres tú.", "Señorita, si supiera nadar, me tiraría en la piscina de tus ojos desde el trampolín de sus pestañas.", "Señorita disculpe, pero la llaman de la caja... –Qué caja?... –De la caja de bombones que te escapaste", "Eres tan hermosa que te regalaría un millón de besos y si no te gustasen te los aceptaría de regreso.", "Eres tan bonita que Dios bajaría a la tierra tan solo para verte pasar.", "¡Eres como una cámara Sony! Cada vez que la miro no puedo evitar sonreir.", "En una isla desierta me gustaría estar y sólo de tus besos poderme alimentar.", "Si fueras lluvia de invierno, yo cerraría el paraguas para sentirte en mi cuerpo.", "Me gustas tanto, tanto, que hasta me gusta estar preso, en las redes de tu encanto.", "Si te pellizco seguro que te enojas pero si me pellizcas tu, seguro que me despierto.", "No son palabras de oro ni tampoco de rubí, son palabras de cariño que compongo para usted.", "Te invito a ser feliz yo pago.", "Cuando caminas no pisas el suelo, lo acaricias.", "Nos veríamos lindo en un pastel de boda juntos.", "Tantas formas de vida y yo solo vivo en sus ojos.", "¿A qué numero llamo si quiero marcarte de por vida?", "Me gustas tanto que no se por donde empezar a decírtelo." ]