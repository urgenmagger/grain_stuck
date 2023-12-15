# Тестовое задание web-программист (React.Native)

💡 **Цель задания:** создать мобильное приложение “Отслеживание ТС (транспортные средства)” на React Native, используя API Google Maps или аналог для получения актуального нахождения парка ТС.

## Описание приложения:

### Экран списка ТС

1. Пользователь должен иметь возможность отфильтровать ТС по их категориям, нажатием кнопки “Применить” по категориям:
   1. Грузовой;
   2. Пассажирский;
   3. Спецтранспорт.
2. Элементы списка должны содержать:
   1. Название ТС — формируется: ТС #порядковый номер в базе;
   2. Имя водителя;
   3. Категория ТС.
3. Экран должен иметь возможность переключать вид с режима списка на просмотр на карте, где будут отображено местоположение ТС разными значками в соответствии с типом ТС.

### Экран ТС

1. Кликая на ТС, пользователь попадает на Экран конкретного ТС. Данный экран должен содержать:
   1. Карту с местонахождением водителя;
   2. Категория ТС;
   3. Имя водителя;
   4. Контактный номер водителя;
   5. Кнопка “Позвонить”. Открывает приложение с набором номера и уже подставленным номером водителя;
   6. Кнопка “Написать”. Открывает приложение whatsapp с чатом водителя и предустановленным сообщением: “Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе”.

### Экран с настройками

1. Должен содержать только возможность переключение языков с английского на русский и наоборот.

## Требования к коду:

1. Приложение должно быть написано на **TypeScript**;
2. Использовать **TanStack Query v5**;
3. Должны быть использованы функциональные компоненты и хуки React;
4. Код должен быть чистым и легким для чтения, с надлежащими комментариями и документацией.

## Сдача работы:

1. Код приложения должен быть загружен в репозиторий на GitHub или аналогичной платформе;
2. База должна браться из файла .json, минимум 10 элементов ТС;
3. Включите в README-файл все необходимые инструкции по установке и запуску приложения;
4. Приветствуется использование Expo + Expo Routing.

## Критерии оценки:

1. Работоспособность согласно ТЗ;
2. Архитектура решения;
3. Удобство чтения кода и комментарии;
4. Удобство проверки.
