import { Request, Response } from 'express';
import { Phrase } from '../models/phrases';

export const ping = (req: Request, res: Response) => {
    res.json({ pong: true });
};

export const random = (req: Request, res: Response) => {
    let nRandom: number = Math.floor(Math.random() * 10);

    res.json({ number: nRandom });
};

export const nome = (req: Request, res: Response) => {
    let nome: string = req.params.nome;
    res.json({ nome: `Voce enviou o nome ${nome}` })
};

export const createPhrases = async (req: Request, res: Response) => {
    let { author, txt } = req.body;
    let newPhrase = await Phrase.create({ author, txt });
    res.json({ id: newPhrase.id, author, txt });
};