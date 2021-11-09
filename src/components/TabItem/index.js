import './index.css'

const TabItem = props => {
  const {tabDetails, clickOnTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeTabClassName = isActive ? 'tab-button active' : 'tab-button'

  const onClickTab = () => {
    clickOnTab(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" className={activeTabClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
