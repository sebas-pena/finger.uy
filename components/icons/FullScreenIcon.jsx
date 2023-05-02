import React from 'react'
const FullScreenIcon = ({ fill, height = 24, width = 24, props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
    height={height}
    width={width}
  >
    <path fill={fill} d="M4 2a2 2 0 0 0-2 2v4a1 1 0 0 0 2 0V4h4a1 1 0 0 0 0-2H4ZM20 2a2 2 0 0 1 2 2v4a1 1 0 1 1-2 0V4h-4a1 1 0 1 1 0-2h4ZM20 22a2 2 0 0 0 2-2v-4a1 1 0 1 0-2 0v4h-4a1 1 0 1 0 0 2h4ZM2 20a2 2 0 0 0 2 2h4a1 1 0 1 0 0-2H4v-4a1 1 0 1 0-2 0v4Z" />
  </svg>
)
export default FullScreenIcon
