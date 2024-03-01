import { Card, CardBody, CardTitle } from 'reactstrap'

const SocialCard = ( {icon, title, link} ) => {
  return (
    <div className="mt-3">
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <Card className="bg-transparent border-0">
                <CardBody className="card__body d-flex align-items-center">
                    <img src={icon} alt="Facebook" className="me-3" />
                    <CardTitle className='pt-2'>{title}</CardTitle>
                </CardBody>
            </Card>
        </a>
    </div>
  )
}

export default SocialCard