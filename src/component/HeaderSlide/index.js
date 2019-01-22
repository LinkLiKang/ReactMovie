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
    }

    render() {
        let { list } = this.props
        let activeItem = list.get(this.state.activeIndex)
        return (
            <div className="slide-container">
                <div className="slide-content">
                    <div className="slide-img"  style={{backgroundImage: `url(${activeItem.get('img')})`}}></div>
                    <h3 className="slide-name"> </h3>
                    <div className="slide-year">年份：</div>
                    <p className="slide-desc">剧情：</p>
                </div>

                <div className="slide-list">{this.getList()}</div>
            </div>
        )
    }

    componentDidMount() {
        const slide = this.slideCreator()
        this.timer = setInterval(() => {
            this.setState({ activeIndex: slide.next().value })
        }, 3000)
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
        list.map((item) => {
            return (
            <div className="slide-list-item" style={{backgroundImage: `url(${item.get('img')})`}} key={item.get('id')}></div>
            )
        })
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['head', 'list'])
})

const mapDispatchToProps = (dispatch) => ({
    getSlideList: dispatch(actionCreator.getSlideListCreator())
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSlide)
