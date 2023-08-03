import { Card } from "react-bootstrap"
import "./SkeletonCard.css"

const SkeletonCard = () => {
  return (
    <Card style={{ width: '18rem' }} className="my-3 mx-2 skeleton-container equipment-card">
        <div className="h-100 d-flex flex-column justify-content-between">
            <div className="skeleton-img skeleton"></div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
            </div>
        </div>
    </Card>
  )
}
export default SkeletonCard