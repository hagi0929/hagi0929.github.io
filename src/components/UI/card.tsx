import './card.scss';
import { BiLinkExternal } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';
import { forwardRef } from 'react';
import skillsColor from './skillsColor';
import { MdMargin } from 'react-icons/md';

interface Project {
  Techstack: string[];
  Description: string | null;
  Website: string | null;
  Github: string | null;
  Thumbnail: string[];
  isPrimary: boolean;
  name: string;
}

interface InfoCardProps {
  project: Project;
  colorfulSkill: boolean;
  style?: React.CSSProperties;
}

const normalizeSkillName = (skill: string): string => {
  return skill.replace(' ', '').replace('-', '').toLowerCase();
};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const InfoCard = forwardRef<HTMLDivElement, InfoCardProps>((props, ref) => {
  const { project, colorfulSkill, style } = props;
  const skillsElements = project.Techstack.map((skill) => {
    const normalizedSkill = normalizeSkillName(skill);
    const color = skillsColor[normalizedSkill] || getRandomColor()
    const skillStyle = colorfulSkill
      ? {
          color: color,
          background: `${color}40`,
          padding: "4px 10px 4px 10px",
          opacity: 1,
        }
      : {};

    return (
      <span key={skill} className="skill" style={skillStyle}>
        {skill}
      </span>
    );
  });

  return (
    <div ref={ref} className={"cardBack cardInfo"} style={style}>
      <div className={"titleContainer"}>
        <span className={"titleStyle"}>{project.name}</span>
        <div className={"linkContainer"}>
          {project.Website && (
            <a href={project.Website} target="_blank" rel="noopener noreferrer">
              <BiLinkExternal />
            </a>
          )}
          {project.Github && (
            <a href={project.Github} target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
          )}
        </div>
      </div>
      <div className={"contentStyle contentContainer"}>
        {project.Description}
      </div>
      <div className={"skillContainer"}>{skillsElements}</div>
    </div>
  );
});

export default InfoCard;
