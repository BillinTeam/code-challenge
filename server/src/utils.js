import Article from './schemas/db/article';
import Faker from 'faker';
import _ from 'lodash';
import User from './schemas/db/user';
import bcrypt from 'bcrypt';
function rnd(a, b) {
    return Faker.random.number({ min: a, max: b })
}

export function cleanNullValues(obj) {
    return Object.keys(obj).forEach((key) => (obj[key] == null) && delete obj[key])
};

export function populate() {
    let names = [];
    let tags = [];
    const nTags = 15;
    const nAuthors = 4;
    /* Generate authors */
    User.remove({}, (err) => {


        for (let i = 0; i < nAuthors; i++) {
            let name = Faker.name.findName();
            names.push(name);

            User.create({
                alias: name,
                email: 'admin' + (i + 1) + '@gmail.com',
                password: bcrypt.hashSync('123456', 8)
            });
        }
        /* Generate tags */
        _.times(nTags, () => {
            tags.push(Faker.random.words(2))
        });

        /* Generate articles */
        Article.remove({}, (err) => {
            if (err) return;

            _.times(10, () => {
                let t = [];
                _.times(rnd(0, 4), () => {
                    t.push(tags[rnd(0, nTags - 1)])
                });
                const content = `
                ${Faker.lorem.paragraphs()}
                ${Faker.lorem.paragraphs()}
            `;
                return Article.create({
                    author: names[rnd(0, nAuthors - 1)],
                    content: content,
                    excerpt: content.slice(0, 100),
                    published: Faker.random.boolean(),
                    tags: [Faker.random.words(2), Faker.random.words()],
                    title: Faker.name.title(),
                });
            });

        });
    });
}