import { Router } from 'express';
import { body, validationResult } from 'express-validator';

const router = Router();

const validators = [
  body('nome').trim().notEmpty().withMessage('Nome é obrigatório').isLength({ max: 100 }),
  body('email').trim().isEmail().withMessage('Email inválido').normalizeEmail(),
  body('telefone').optional().trim().isLength({ max: 20 }),
  body('mensagem').trim().notEmpty().withMessage('Mensagem é obrigatória').isLength({ max: 2000 }),
];

router.post('/', validators, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { nome, email, telefone, mensagem } = req.body;
  const texto = `Olá! Novo contato pelo site Rosiani Garcia Contabilidade\n\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefone || 'Não informado'}\nMensagem: ${mensagem}`;
  const whatsappUrl = `https://wa.me/5548984292437?text=${encodeURIComponent(texto)}`;

  return res.json({ whatsappUrl, success: true });
});

export default router;
