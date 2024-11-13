import PropTypes from "prop-types"

const SkillCard = ({
    imgSrc,
    label,
    classes
}) => {
  return (
    <div className={'flex items-center gap-3 ring-2 ring-inset ring-sky-500 rounded-2xl p-3 bg-zinc-700 hover:bg-sky-500 transition-colors group ' + classes}>
        <figure className="bg-zinc-900 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
            <img src={imgSrc} width={32} height={32} alt={label} />
        </figure>
        <div className="text-neutral-50">
            <h3>{label}</h3>
        </div>
    </div>
  )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default SkillCard