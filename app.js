const words = ["Tanmay Gupta.", "a learner", "an IITian.", "a Designer." ];

let cursor = gsap.to('.cursor',{opacity: 0, ease: "power2.inOut", repeat: -1})

let timeline_1 = gsap.timeline({repeat: -1});

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 0.5})
    tl.to('.text',{duration: 2, text: word})
    timeline_1.add(tl)
})