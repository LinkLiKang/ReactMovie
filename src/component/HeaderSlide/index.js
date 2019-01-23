import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import './style.scss'
class HeaderSlide extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0
        }
        this.timer = null
        this.slide = null
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }

    render() {
        let { list } = this.props
        let activeItem = list.get(this.state.activeIndex)
        return (
            <div className="slide-container" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <div className="slide-content">
                    <div className="slide-img"  style={{backgroundImage: `url(${activeItem.get('img')})`}}></div>
                    <h3 className="slide-name"> {activeItem.get('name')}</h3>
                    <div className="slide-year">年份：{activeItem.get('year')}</div>
                    <p className="slide-desc">剧情：{activeItem.get('desc')}</p>
                </div>

                <div className="slide-list">{this.getList()}</div>
            </div>
        )
    }

    componentDidMount() {
        this.slide = this.slideCreator()
        this.timer = setInterval(() => {
            this.setState({ activeIndex: this.slide.next().value })
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }


    * slideCreator() {
        while (1) {
            for (let i = 0; i < 9; i++) {
                yield i
            }
        }
    }

    getList(){
        let { list } = this.props
        return list.map((item, index) => {
            return (
            <div className={`slide-list-item ${index === this.state.activeIndex ? 'active' : ''}`} style={{backgroundImage: `url(${item.get('img')})`}} key={item.get('id')}></div>
            )
        })
    }

    handleMouseEnter(){
        clearInterval(this.timer)
    }

    handleMouseLeave(){
        this.timer = setInterval(() => {
            this.setState({ activeIndex: this.slide.next().value })
        }, 5000)
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['head', 'list'])
})

const mapDispatchToProps = (dispatch) => ({
    getSlideList: dispatch(actionCreator.getSlideListCreator())
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSlide)
