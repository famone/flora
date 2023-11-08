import { ref } from 'vue'

import { StarIcon, CheckBadgeIcon, BookOpenIcon, TruckIcon, CreditCardIcon, CursorArrowRaysIcon } from '@heroicons/vue/24/outline'

export function useNavBar() {
    const nav = ref([
        {
            txt: 'Главная'
        },
        {
            txt: 'О нас'
        },
        {
            txt: 'Контакты'

        },
        {
            txt: 'Где купить'
        }
    ])

    const main_nav = ref([
        {
            txt: 'Новинки',
            icon: StarIcon,
            link: '/'
        },
        {
            txt: 'Подарочные сертификаты',
            icon: CheckBadgeIcon,
            link: '/'
        },
        {
            txt: 'Печатная продукция',
            icon: BookOpenIcon,
            link: '/'
        },
        {
            txt: 'Оплата',
            icon: CreditCardIcon,
            link: '/'
        },
        {
            txt: 'Доставка',
            icon: TruckIcon,
            link: '/'
        },
        {
            txt: 'Инструкция',
            icon: CursorArrowRaysIcon,
            link: '/'
        },
    ])

    return {
        nav,
        main_nav
    }
}