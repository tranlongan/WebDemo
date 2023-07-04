const container = document.getElementById('container')
const temp = document.getElementById('temp')
const coin1 = document.getElementById('banner2-coin__1')
const coin2 = document.getElementById('banner2-coin__2')
const coin3 = document.getElementById('banner2-coin__3')
const coin4 = document.getElementById('banner2-coin__4')
const coin5 = document.getElementById('banner2-coin__5')
const sun = document.getElementById('banner4-sun')
const human = document.getElementById('banner4-human')
const fox = document.getElementById('banner4-fox')
const cloud1 = document.getElementById('banner4-cloud1')
const cloud2 = document.getElementById('banner4-cloud2')
const cloud3 = document.getElementById('banner4-cloud3')
const cloud4 = document.getElementById('banner4-cloud4')
const banner2ContentTitle = document.getElementById('banner2-content--title__text')
const banner4ContentTitle = document.getElementById('banner4-content--title__text')
const banner2ContentDescription = document.getElementById('banner2-content--description__text')
const banner4ContentDescription = document.getElementById('banner4-content--description__text')
const blinkTitle = document.querySelector('.banner2-content--title')
const blinkTitle4 = document.querySelector('.banner4-content--title')
const blinkDescription = document.querySelector('.banner2-content--description')
const blinkDescription4 = document.querySelector('.banner4-content--description')
container.addEventListener('scroll', function () {
    const bannerCards = document.querySelectorAll('.banner-card')
    bannerCards.forEach(card => {
        if (Math.ceil(container.scrollTop) === 714 || Math.ceil(container.scrollTop) === 668) {
            console.log('banner 2')
            coin1.style.animation = "animationBanner2Coin1 1.5s linear forwards"
            coin1.addEventListener('animationend', function () {
                coin1.style.animation = "animationBanner2Coin1a 1s linear infinite alternate"
            })
            coin2.style.animation = "animationBanner2Coin2 1.5s linear forwards"
            coin2.addEventListener('animationend', function () {
                coin2.style.animation = "animationBanner2Coin2a 1s linear infinite alternate"
            })
            coin3.style.animation = "animationBanner2Coin3 1.5s linear forwards"
            coin3.addEventListener('animationend', function () {
                coin3.style.animation = "animationBanner2Coin3a 1s linear infinite alternate"
            })
            coin4.style.animation = "animationBanner2Coin4 1.5s linear forwards"
            coin4.addEventListener('animationend', function () {
                coin4.style.animation = "animationBanner2Coin4a 1s linear infinite alternate"
            })
            coin5.style.animation = "animationBanner2Coin5 1.5s linear forwards"
            coin5.addEventListener('animationend', function () {
                coin5.style.animation = "animationBanner2Coin5a 1s linear infinite alternate"
            })
            banner2ContentTitle.style.setProperty("--characters", `${banner2ContentTitle.textContent.length}`)
            banner2ContentTitle.style.animation = `typing 3s steps(var(--characters)) forwards`
            banner2ContentTitle.addEventListener('animationend', function () {
                blinkTitle.classList.add('noAfter')
                banner2ContentDescription.style.setProperty("--characters", `${banner2ContentDescription.textContent.length}`)
                banner2ContentDescription.style.animation = `typing 2s steps(var(--characters)) forwards`
                banner2ContentDescription.addEventListener('animationend',function () {
                    blinkDescription.classList.add('noAfter')
                })
            })
        }
        if (Math.ceil(container.scrollTop) === 1428 || Math.ceil(container.scrollTop) === 1335) {
            console.log('banner 3')
            const bannerCardItem3FrameImage = document.querySelector('.banner-card:nth-child(3) .banner-card--cover__frameImage')
            const bannerCardItem3 = document.querySelector('.banner-card:nth-child(3)')
            bannerCardItem3FrameImage.style.animation = "animationBanner3CoverFrameImage 3s linear 1 forwards"
            bannerCardItem3FrameImage.addEventListener('animationend', function () {
                bannerCardItem3.style.transform = "perspective(1200px) scale(1.3, 1) rotateY(-180deg)"
            })
        }
        if (Math.ceil(container.scrollTop) === 2141 || Math.ceil(container.scrollTop) === 2002) {
            console.log('banner 4')
            sun.style.animation = "animationBanner4Sun 3s ease-in forwards"
            human.style.animation = "animationBanner4Human 3s ease-in forwards"
            fox.style.animation = "animationBanner4Fox 3s ease-in forwards"
            sun.addEventListener('animationend', function () {
                cloud3.style.animation = "animationBanner4Cloud3 1.5s ease-in forwards"
                cloud3.addEventListener('animationend', function () {
                    cloud1.style.animation = "animationBanner4Cloud1 1.5s ease-in forwards"
                    cloud1.addEventListener('animationend', function () {
                        cloud4.style.animation = "animationBanner4Cloud4 1.5s ease-in forwards"
                        cloud4.addEventListener('animationend', function () {
                            cloud2.style.animation = "animationBanner4Cloud2 1.5s ease-in forwards"
                        })
                    })
                })
            })
            banner4ContentTitle.style.setProperty("--characters", `${banner4ContentTitle.textContent.length}`)
            banner4ContentTitle.style.animation = `typing 3s steps(var(--characters)) forwards`
            banner4ContentTitle.addEventListener('animationend', function () {
                blinkTitle4.classList.add('noAfter')
                banner4ContentDescription.style.setProperty("--characters", `${banner4ContentDescription.textContent.length}`)
                banner4ContentDescription.style.animation = `typing 2s steps(var(--characters)) forwards`
                banner4ContentDescription.addEventListener('animationend',function () {
                    blinkDescription4.classList.add('noAfter')
                })
            })
        }
    })
    temp.textContent = `${Math.ceil(container.scrollTop)}`
})

const bannerCards = document.getElementById('banner--cards')

function handlePrev() {
    const bannerCardItem3FrameImage = document.querySelector('.banner-card:nth-child(3) .banner-card--cover__frameImage')

    const left = document.querySelector('.banner-card:last-child')
    const mid = document.querySelector('.banner-card:nth-child(3)')
    const right = document.querySelector('.banner-card:nth-child(2)')

    const cards = document.querySelectorAll('.banner-card')
    cards.forEach(card => {
        bannerCards.prepend(cards[cards.length - 1])
        bannerCardItem3FrameImage.style.animation = ""
        right.style.transform = "perspective(1200px) scale(1.3, 1) rotateY(180deg)"
        mid.style.transform = "perspective(1200px) translateX(-240px) scale(1, 0.8)"
        left.style.transform = "perspective(1200px) translateX(240px) scale(1, 0.8)"
    })
}

function handleNext() {
    const bannerCardItem3FrameImage = document.querySelector('.banner-card:nth-child(3) .banner-card--cover__frameImage')

    const left = document.querySelector('.banner-card:nth-child(4)')
    const mid = document.querySelector('.banner-card:nth-child(3)')
    const right = document.querySelector('.banner-card:nth-child(1)')

    const cards = document.querySelectorAll('.banner-card')
    cards.forEach(card => {
        bannerCards.appendChild(cards[0])
        bannerCardItem3FrameImage.style.animation = ""
        left.style.transform = "perspective(1200px) scale(1.3, 1) rotateY(-180deg)"
        mid.style.transform = "perspective(1200px) translateX(240px) scale(1, 0.8)"
        right.style.transform = "perspective(1200px) translateX(-240px) scale(1, 0.8)"
    })
}