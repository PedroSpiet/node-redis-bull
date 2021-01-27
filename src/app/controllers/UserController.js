import Mail from '../lib/mail';

export default {
    async store(req, res) {
        const {
            name,
            email,
            password
        } = req.body;

        const user = {
            name,
            email,
            password
        }

        //enviar email
        await Mail.sendMail({
            from: 'Pedro Emanoel <tyroxbr@gmail.com>',
            to: `${name} <${email}>`,
            subject: 'Cadastro de Usuarios',
            html: `Olá, ${name} Bem-vindo ao sistema de filas!`
        });

        return res.json(user)
    }
}