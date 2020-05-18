import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './styles/Contestant.m.css';
import { Contestant as ContestantData } from '../interfaces';

export interface ContestantProperties extends ContestantData {
	score: number;
	editable?: boolean;
	onChange?: (value: number) => void;
}

const factory = create({}).properties<ContestantProperties>();

export const Contestant = factory(function Contestant({ properties }) {
	const { name, handle, score, editable, onChange = () => {} } = properties();
	return (
		<div classes={css.root}>
			<div classes={css.name}>{name}</div>
			<img
				classes={css.avatar}
				src={`https://avatar-redirect.appspot.com/twitter/${handle}`}
			/>
			{editable ? (
				<input type="number" value={'' + score} onchange={() => onChange(score)} />
			) : (
				<div classes={css.score}>{'' + score}</div>
			)}
		</div>
	);
});

export default Contestant;