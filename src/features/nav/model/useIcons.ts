
import cereal from '@/shared/icons/cereal.vue';
import strawberry from '@/shared/icons/strawberry.vue';
import perenial from '@/shared/icons/perenial.vue';
import springflox from '@/shared/icons/springflox.vue';
import summerflox from '@/shared/icons/summerflox.vue';
import shrubs from '@/shared/icons/shrubs.vue';
import leaves from '@/shared/icons/leaves.vue';

export default function useIcons() {
  const icons = [
    {
      name: 'Земляника садовая',
      icon: strawberry
    },
    {
      name: 'Злаки',
      icon: cereal
    },
    {
      name: 'Кустарники',
      icon: shrubs
    },
    {
      name: 'Многолетники',
      icon: perenial
    },
    {
      name: 'Флоксы весеннего цветения',
      icon: springflox
    },
    {
      name: 'Флоксы летнего цветения',
      icon: summerflox
    }
  ];

  const getIcon = (name: string) => {
    const res = icons.find((i) => i.name === name);
    if (res) {
      return res?.icon;
    } else {
      return leaves;
    }
  };

  return {
    getIcon
  };
}