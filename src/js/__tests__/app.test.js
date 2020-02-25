import findBy from '../app';

test('ищем свищем', () => {
    const finder = findBy('name', 'урон');
    const results = [
        { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
        { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
        { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
    ].filter(finder);
    const expected = [{
        name: 'урон',
        type: 'help',
        description: 'Страница описания элемента интерфейса',
    }];

    expect(expected).toEqual(results);
});

test('ищем свищем', () => {
    const finder = findBy('name', 'урон');
    const results = [
        { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
        { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
        { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
        { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса2' },
        { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса3' },
    ].filter(finder);
    const expected = [
        { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
        { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса2' },
        { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса3' },
    ];

    expect(expected).toEqual(results);
});

test('ищем свищем', () => {
    const finder = findBy('name', 'name');
    const results = [
        { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
        { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
        { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
    ].filter(finder);
    const expected = [];

    expect(expected).toEqual(results);
});
