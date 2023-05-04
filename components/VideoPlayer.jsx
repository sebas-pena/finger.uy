'use client'
import React, { useState, useEffect, useRef } from 'react'
import PauseIcon from './icons/PauseIcon'
import PlayIcon from './icons/PlayIcon'
import { secondsToMinutes } from '@/lib/time'
import FullScreenIcon from './icons/FullScreenIcon'
import Spinner from './icons/Spinner'
import DownloadIcon from './icons/DownloadIcon'

const VideoPlayer = ({ src, muted }) => {
  const [isWaiting, setIsWaiting] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [durationSec, setDurationSec] = useState(0)
  const [elapsedSec, setElapsedSec] = useState(0)
  const [showSpeedOptions, setShowSpeedOptions] = useState(false)
  const ctnRef = useRef(null)
  const videoRef = useRef(null)
  const progressRef = useRef(null)
  const bufferRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      let showControlsTimeout = null;

      const updateTimeOut = () => {
        clearTimeout(showControlsTimeout)
        setShowControls(true)
        showControlsTimeout = setTimeout(() => {
          setShowControls(false)
        }, 3000)
      }

      const onWaiting = () => {
        if (isPlaying) setIsPlaying(false)
        setIsWaiting(true)
      }

      const onPlay = () => {
        if (isWaiting) setIsWaiting(false)
        setIsPlaying(true)
        updateTimeOut()
      }

      const onPause = () => {
        setIsPlaying(false)
        setIsWaiting(false)
        updateTimeOut()
      }

      const element = videoRef.current

      const onProgress = () => {
        if (!element.buffered || !bufferRef.current) return
        if (!element.buffered.length) return
        const bufferedEnd = element.buffered.end(element.buffered.length - 1)
        const duration = element.duration
        if (bufferRef && duration > 0) {
          bufferRef.current.style.width = (bufferedEnd / duration) * 100 + '%'
        }
      }

      const onTimeUpdate = () => {
        setIsWaiting(false)
        if (!element.buffered || !progressRef.current) return
        const duration = element.duration
        setDurationSec(duration)
        setElapsedSec(element.currentTime)
        if (progressRef && duration > 0) {
          progressRef.current.style.width =
            (element.currentTime / duration) * 100 + '%'
        }
      }

      const onMouseMove = (e) => {
        updateTimeOut()
      }

      element.addEventListener('progress', onProgress)
      element.addEventListener('timeupdate', onTimeUpdate)
      element.addEventListener('waiting', onWaiting)
      element.addEventListener('play', onPlay)
      element.addEventListener('playing', onPlay)
      element.addEventListener('pause', onPause)
      element.addEventListener('mousemove', onMouseMove)

      return () => {
        element.removeEventListener('waiting', onWaiting)
        element.removeEventListener('play', onPlay)
        element.removeEventListener('playing', onPlay)
        element.removeEventListener('pause', onPause)
        element.removeEventListener('progress', onProgress)
        element.removeEventListener('timeupdate', onTimeUpdate)
        element.removeEventListener('mousemove', onMouseMove)
      }
    }
  }, [videoRef])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate
    }
  }, [playbackRate])

  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  const handleFullScreenClick = () => {
    if (ctnRef.current) {

      if (document.fullscreenElement) {
        screen.orientation.unlock()
        document.exitFullscreen()
      } else {
        if (ctnRef.current.requestFullscreen) {
          ctnRef.current.requestFullscreen()
        } else if (ctnRef.current.webkitRequestFullscreen) {
          ctnRef.current.webkitRequestFullscreen()
        } else if (ctnRef.current.msRequestFullscreen) {
          ctnRef.current.msRequestFullscreen()
        }
        window.screen.orientation
          .lock("landscape-primary")
          .then(() => { }, () => { })
      }
    }
  }
  const moveToTime = (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect()
    const clickedPos = (e.clientX - left) / width
    if (!videoRef.current) return
    if (clickedPos < 0 || clickedPos > 1) return

    const durationMs = videoRef.current.duration * 1000 || 0

    const newElapsedMs = durationMs * clickedPos
    const newTimeSec = newElapsedMs / 1000
    videoRef.current.currentTime = newTimeSec
  }
  const handleSetPlaybackRate = (rate) => {
    setPlaybackRate(rate)
    setShowSpeedOptions(false)
  }

  const elapsedSecString = secondsToMinutes(elapsedSec)
  const durationSecString = secondsToMinutes(durationSec)
  const currentSrc = videoRef.current?.currentSrc
  return (
    <div
      className="relative cursor-pointer aspect-video bg-black flex flex-col items-center w-full h-full overflow-hidden"
      ref={ctnRef}
    >
      {isWaiting && <Spinner width={40} height={40} className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2" />}
      <video
        className="w-full md:h-full aspect-video"
        ref={videoRef}
        muted={muted}
        onClick={handlePlayPauseClick}
      >
        {
          src.map((source) => {
            return <source src={source} key={source} type="video/mp4" />
          })
        }
      </video>
      <div onClick={moveToTime} className={`absolute w-[calc(100%_-_16px)] ${showControls ? "opacity-100" : "opacity-0"} duration-100 py-2 rounded-full mx-2 left-0 bottom-8`}>
        <div className="relative w-full rounded-full overflow-hidden h-1 bg-gray-400" >
          <div className="absolute rounded-full h-1 z-30 bg-blue-500" ref={progressRef} />
          <div className="absolute rounded-full h-1 z-20 bg-gray-200" ref={bufferRef} />
        </div>
      </div>
      <div
        className={`opacity-0 ${showControls ? "opacity-100" : "opacity-0"} duration-100 absolute flex justify-between items-center w-full bottom-2 px-2`}
      >
        <div className="inline-flex gap-2 items-center">
          <button
            className="hover:bg-[#c1c1c199] rounded-full focus:outline-none"
            onClick={handlePlayPauseClick
            }>
            {
              isPlaying
                ? <PauseIcon fill="#fff" />
                : <PlayIcon fill="#fff" />
            }
          </button>
          <p className="font-coolvetica font-semibold text-white text-sm">
            {`${elapsedSecString} / ${durationSecString}`}
          </p>
        </div>
        <div className="inline-flex gap-2 items-center">
          {
            currentSrc &&
            <a className="hover:bg-[#c1c1c199] rounded-full p-1" href={currentSrc} target="_blank">
              <DownloadIcon width={16} height={16} fill="#fff" />
            </a>
          }
          <div className="relative">
            <div className={`${showSpeedOptions ? 'visible' : 'hidden'} absolute flex flex-col bg-white w-full bottom-full rounded-sm overflow-hidden`}>
              <SpeedButton onClick={() => handleSetPlaybackRate(0.5)} speed={0.5} />
              <SpeedButton onClick={() => handleSetPlaybackRate(1)} speed={1} />
              <SpeedButton onClick={() => handleSetPlaybackRate(2)} speed={2} />
              <SpeedButton onClick={() => handleSetPlaybackRate(3)} speed={3} />
            </div>
            <button
              className="font-coolvetica px-2 h-full text-white text-sm hover:bg-[#c1c1c199] rounded-md"
              onClick={() => setShowSpeedOptions(!showSpeedOptions)}
            >
              x{playbackRate}
            </button>
          </div>
          <button
            className="p-1 hover:bg-[#c1c1c199] rounded-full focus:outline-none"
            onClick={handleFullScreenClick}
          >
            <FullScreenIcon fill="#fff" height={16} width={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

const SpeedButton = ({ speed, onClick }) => {
  return (
    <button className="font-coolvetica text-xs py-1 text-mine-shaft-900 hover:bg-slate-200 duration-100" onClick={onClick}>
      {speed}
    </button>
  )
}

export default VideoPlayer
