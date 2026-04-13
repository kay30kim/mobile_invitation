import os
import sys
import subprocess

# yt-dlp 설치 확인 및 자동 설치
try:
    import yt_dlp
except ImportError:
    print("yt-dlp 설치 중...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "yt-dlp"])
    import yt_dlp


def get_download_folder():
    """윈도우/맥/리눅스 다운로드 폴더 경로 반환"""
    home = os.path.expanduser("~")
    download_path = os.path.join(home, "Downloads")
    os.makedirs(download_path, exist_ok=True)
    return download_path


def download_mp3(url: str):
    download_folder = get_download_folder()

    ydl_opts = {
        "format": "bestaudio/best",
        "outtmpl": os.path.join(download_folder, "%(title)s.%(ext)s"),
        "postprocessors": [
            {
                "key": "FFmpegExtractAudio",
                "preferredcodec": "mp3",
                "preferredquality": "192",  # 192kbps
            }
        ],
        "quiet": False,
        "noplaylist": True,  # 단일 영상만 (플레이리스트 무시)
    }

    print(f"\n📥 다운로드 시작: {url}")
    print(f"📂 저장 경로: {download_folder}\n")

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])

    print("\n✅ 완료! 다운로드 폴더를 확인해주세요.")


def main():
    print("=" * 50)
    print("   YouTube → MP3 다운로더")
    print("=" * 50)

    # 커맨드라인 인자로 URL 받기
    if len(sys.argv) > 1:
        url = sys.argv[1]
    else:
        url = input("\nYouTube URL을 입력하세요: ").strip()

    if not url:
        print("❌ URL을 입력해주세요.")
        sys.exit(1)

    download_mp3(url)


if __name__ == "__main__":
    main()