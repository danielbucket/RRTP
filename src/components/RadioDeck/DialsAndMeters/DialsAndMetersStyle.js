import styled from 'styled-components';

export const DialsAndMetersStyle = styled.div`
	grid-row: dialsAndMeters;

	
	color: ${p=>p.theme.fontColor};
	font-family: ${p=>p.theme.mainFont};
	font-size: 11vw;
	letter-spacing: .75rem;


	@media(min-width:${p=>p.theme.minWidthMdScreen}) {
		font-size: 5rem;
	}
`;